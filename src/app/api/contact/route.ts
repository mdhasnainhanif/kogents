import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, project_need } = body;

    console.log('Newsletter subscription request:', { name, email, phone, project_need });

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

    console.log('✅ Newsletter subscription validated:', { finalName, email, finalPhone, finalProjectNeed });

    // Simulate successful processing
    return NextResponse.json({
      status: 'success',
      message: 'Newsletter subscription successful!',
      data: {
        name: finalName,
        email: email,
        phone: finalPhone,
        project_need: finalProjectNeed,
        isNewsletterSubscription: isNewsletterSubscription
      }
    });

  } catch (error) {
    console.error('❌ Newsletter subscription error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    );
  }
}