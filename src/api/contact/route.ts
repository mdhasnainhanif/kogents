import { NextRequest, NextResponse } from 'next/server';
import { getCRMUrl, CRM_CONFIG } from '@/lib/contact/sendContact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      project_need,
      gclid,
      fbclid,
      igclid,
      ttclid,
      fingerprint,
      chat,
      stable_session_id,
      fingerprintdata,
    } = body;

    console.log('📝 Form submission received:', {
      name,
      email,
      phone,
      project_need,
      gclid,
      fbclid,
      igclid,
      ttclid,
      fingerprint: fingerprint ? 'Present' : 'Not present',
      chat,
      stable_session_id,
      fingerprintdata: fingerprintdata ? 'Present' : 'Not present',
    });

    // Validation - for newsletter subscriptions, only email is required
    if (!email) {
      console.log('❌ Validation failed: Email is required');
      return NextResponse.json(
        { status: 'error', message: 'Email is required' },
        { status: 400 }
      );
    }

    // For newsletter subscriptions, set default values for missing fields
    const isNewsletterSubscription = !name && !phone && !project_need;
    const finalName = name || 'Newsletter Subscriber';
    const finalPhone = phone || '';
    const finalProjectNeed = project_need || 'Newsletter subscription request';

    // Get client IP and user agent
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown';
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    console.log('🌐 Client info:', { clientIp, userAgent });

    // Prepare data for Laravel CRM
    const contactData = {
      name: finalName,
      phone: finalPhone,
      email,
      message: finalProjectNeed, // Map project_need to message for Laravel
      gclid: gclid || '',
      fbclid: fbclid || '',
      igclid: igclid || '',
      ttclid: ttclid || '',
      fingerprint: fingerprint || '',
      chat: chat || '',
      stable_session_id: stable_session_id || '',
      fingerprintdata: fingerprintdata || '',
      client_ip: clientIp,
      user_agent: userAgent,
      service_id: isNewsletterSubscription ? 2 : 1, // Use service_id 2 for newsletter subscriptions
      link: isNewsletterSubscription ? 'https://kogents.ai/newsletter' : 'https://kogents.ai/contact',
    };

    console.log('📊 Prepared contact data:', contactData);

    // Convert to base64 and send to Laravel CRM
    const jsonData = JSON.stringify(contactData);
    const base64Data = Buffer.from(jsonData).toString('base64');
    const encodedData = encodeURIComponent(base64Data);

    console.log('🔗 CRM URL components:', {
      base64Length: base64Data.length,
      encodedLength: encodedData.length,
      sampleData: jsonData.substring(0, 100) + '...',
      fullJsonData: jsonData
    });

    // Send to your Laravel CRM endpoint
    const crmUrl = getCRMUrl(encodedData);
    
    console.log('🚀 Attempting to send to CRM:', crmUrl);
    console.log('🔗 Full CRM URL:', crmUrl);

    try {
      console.log('🌐 Making CRM request with:', {
        method: 'GET',
        url: crmUrl,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': CRM_CONFIG.USER_AGENT,
        },
        timeout: CRM_CONFIG.TIMEOUT
      });
      
      const crmResponse = await fetch(crmUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': CRM_CONFIG.USER_AGENT,
        },
        // Add timeout
        signal: AbortSignal.timeout(CRM_CONFIG.TIMEOUT),
      });

      console.log('📡 CRM Response status:', crmResponse.status);
      console.log('📡 CRM Response statusText:', crmResponse.statusText);
      console.log('📡 CRM Response headers:', Object.fromEntries(crmResponse.headers.entries()));

      if (!crmResponse.ok) {
        const errorText = await crmResponse.text();
        console.error('❌ CRM API Error Response:', {
          status: crmResponse.status,
          statusText: crmResponse.statusText,
          body: errorText,
          url: crmUrl
        });
        
        // Log the full error for debugging
        console.error('❌ Full CRM Error Details:', {
          url: crmUrl,
          status: crmResponse.status,
          statusText: crmResponse.statusText,
          responseBody: errorText,
          requestHeaders: {
            'Content-Type': 'application/json',
            'User-Agent': CRM_CONFIG.USER_AGENT,
          }
        });
        
        throw new Error(`CRM API Error: ${crmResponse.status} ${crmResponse.statusText} - ${errorText}`);
      } else {
        const crmResponseText = await crmResponse.text();
        console.log('✅ CRM API Success Response:', crmResponseText);
        console.log('✅ CRM Response Length:', crmResponseText.length);
      }

    } catch (crmError) {
      console.error('❌ CRM API Call Error:', {
        error: crmError instanceof Error ? crmError.message : 'Unknown error',
        stack: crmError instanceof Error ? crmError.stack : undefined,
        url: crmUrl,
        timeout: CRM_CONFIG.TIMEOUT
      });
      
      // Don't fail the request if CRM fails, just log and continue
      console.log('⚠️ CRM call failed, but continuing with email and success response');
    }

    // Send admin notification email (via PHP mailer)
    console.log('📧 Sending email via PHP mailer endpoint...');
    try {
      const phpMailerUrl = 'https://kogents-email-service.vercel.app/api/contact-email'; 
      const toEmail = 'info@kogents.ai'; // Destination admin email
      const phpResponse = await fetch(phpMailerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: finalName,
          email,
          phone: finalPhone,
          message: finalProjectNeed,
          to: toEmail,
          gclid: gclid || '',
          fbclid: fbclid || '',
          igclid: igclid || '',
          ttclid: ttclid || '',
          fingerprint: fingerprint || '',
          chat: chat || '',
          stable_session_id: stable_session_id || '',
          fingerprintdata: fingerprintdata || '',
          client_ip: clientIp,
          user_agent: userAgent,
          service_id: String(contactData.service_id),
          link: contactData.link,
        }) as unknown as BodyInit,
      });

      const phpText = await phpResponse.text();
      console.log('📧 PHP mailer response status:', phpResponse.status, phpResponse.statusText);
      console.log('📧 PHP mailer raw response:', phpText);

      let phpJson: any = null;
      try { phpJson = JSON.parse(phpText); } catch { /* ignore non-JSON */ }

      const emailSucceeded = phpResponse.ok && (!!phpJson ? phpJson.status === 'success' : true);
      if (!emailSucceeded) {
        console.error('❌ PHP mailer reported failure', { status: phpResponse.status, statusText: phpResponse.statusText, body: phpText });
        return NextResponse.json(
          { status: 'error', message: 'Email failed to send', email_to: toEmail, details: phpJson || phpText },
          { status: 500 }
        );
      }

      console.log('✅ PHP mailer reported success', phpJson || phpText);
    } catch (emailError) {
      console.error('❌ PHP mailer request error:', {
        error: emailError instanceof Error ? emailError.message : 'Unknown error',
        stack: emailError instanceof Error ? emailError.stack : undefined,
      });
      return NextResponse.json(
        { status: 'error', message: 'Email request error' },
        { status: 500 }
      );
    }

    console.log('✅ Form submission completed successfully');

    return NextResponse.json({
      status: 'success',
      message: 'Form submitted successfully!',
      data: {
        name,
        email,
        phone,
        project_need,
        tracking: {
          gclid: gclid || 'Not present',
          fbclid: fbclid || 'Not present',
          igclid: igclid || 'Not present',
          ttclid: ttclid || 'Not present',
          fingerprint: fingerprint ? 'Present' : 'Not present',
          stable_session_id: stable_session_id || 'Not present',
        },
        email_to: 'info@kogents.ai',
      },
    });

  } catch (error) {
    console.error('💥 Contact form error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      body: request.body
    });
    
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
