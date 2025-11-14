// app/images_sitemap.xml/route.ts
type ImageEntry = {
  pageLoc: string;   // absolute page URL
  images: string[];  // absolute original asset URLs (no /_next/image)
};

const SITE = "https://kogents.ai";

/**
 * 1) PASTE your raw list here exactly as you posted it (one big line or multiple lines).
 *    Format example (your current style):
 *    https://kogents.ai/ 2025-10-03 daily 1.0 https://kogents.ai/assets/img/erp-011.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fai-chatbot-agent.webp&w=1920&q=75 ...
 *
 *    You can paste the *entire* content from your message. Parser will do the rest.
 */
const RAW = `
https://kogents.ai/ 2025-10-03 daily 1.0 https://kogents.ai/assets/img/erp-011.svg https://kogents.ai/assets/img/back-img.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fwhatsapp-ai-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fphone-ai-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fai-assistant-app.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fai-chatbot-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fvoice-ai-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fshopify-ai-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fmessenger-ai-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fstandalone-ai-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fkiosk-ai-agent.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fmembers.png&w=1920&q=75 https://kogents.ai/assets/img/agent-01.svg
https://kogents.ai/platforms/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-agent-dashboard/5.svg https://kogents.ai/assets/img/ai-agent-dashboard/6.svg https://kogents.ai/assets/img/ai-agent-dashboard/7.svg https://kogents.ai/assets/img/ai-agent-dashboard/8.svg
https://kogents.ai/chatbot/brief/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/kogents-logo.svg https://kogents.ai/assets/img/step4img.svg
https://kogents.ai/platforms/line-ai-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-microsoft/banner.webp https://kogents.ai/assets/img/ai-microsoft/1.svg https://kogents.ai/assets/img/ai-microsoft/2.svg https://kogents.ai/assets/img/ai-microsoft/3.svg https://kogents.ai/assets/img/ai-microsoft/4.svg https://kogents.ai/assets/img/ai-microsoft/5.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F4.webp&w=1920&q=75
https://kogents.ai/solutions/customer-service-ai-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/customer-service-ai-agents/banner.webp https://kogents.ai/assets/img/customer-service-ai-agents/1.svg https://kogents.ai/assets/img/customer-service-ai-agents/2.svg https://kogents.ai/assets/img/customer-service-ai-agents/3.svg https://kogents.ai/assets/img/customer-service-ai-agents/4.svg https://kogents.ai/assets/img/customer-service-ai-agents/5.svg https://kogents.ai/assets/img/customer-service-ai-agents/6.svg https://kogents.ai/assets/img/customer-service-ai-agents/7.svg https://kogents.ai/assets/img/customer-service-ai-agents/8.svg https://kogents.ai/assets/img/customer-service-ai-agents/9.svg https://kogents.ai/assets/img/customer-service-ai-agents/10.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/platforms/slack-ai-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-slack/banner.webp https://kogents.ai/assets/img/ai-slack/1.svg https://kogents.ai/assets/img/ai-slack/2.svg https://kogents.ai/assets/img/ai-slack/3.svg https://kogents.ai/assets/img/ai-slack/4.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-slack%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-slack%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-slack%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-slack%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-slack%2F5.webp&w=1920&q=75
https://kogents.ai/platforms/hubspot-ai-integration/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-hubspot/banner.webp https://kogents.ai/assets/img/ai-hubspot/1.svg https://kogents.ai/assets/img/ai-hubspot/2.svg https://kogents.ai/assets/img/ai-hubspot/3.svg https://kogents.ai/assets/img/ai-hubspot/4.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-hubspot%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-hubspot%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-hubspot%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-hubspot%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-hubspot%2F5.webp&w=1920&q=75
https://kogents.ai/solutions/ai-agent-for-marketing/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-agent-for-marketing/banner.webp https://kogents.ai/assets/img/ai-agent-for-marketing/1.svg https://kogents.ai/assets/img/ai-agent-for-marketing/2.svg https://kogents.ai/assets/img/ai-agent-for-marketing/3.svg https://kogents.ai/assets/img/ai-agent-for-marketing/4.svg https://kogents.ai/assets/img/ai-agent-for-marketing/5.svg https://kogents.ai/assets/img/ai-agent-for-marketing/6.svg https://kogents.ai/assets/img/ai-agent-for-marketing/7.svg https://kogents.ai/assets/img/ai-agent-for-marketing/8.svg https://kogents.ai/assets/img/ai-agent-for-marketing/9.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/platforms/jira-ai-integration/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-jira/banner.webp https://kogents.ai/assets/img/ai-jira/1.svg https://kogents.ai/assets/img/ai-jira/2.svg https://kogents.ai/assets/img/ai-jira/3.svg https://kogents.ai/assets/img/ai-jira/4.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-jira%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-jira%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-jira%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-jira%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-jira%2F5.webp&w=1920&q=75
https://kogents.ai/solutions/ai-agent-for-hr/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-agent-for-hr/banner.webp https://kogents.ai/assets/img/ai-agent-for-hr/1.svg https://kogents.ai/assets/img/ai-agent-for-hr/2.svg https://kogents.ai/assets/img/ai-agent-for-hr/3.svg https://kogents.ai/assets/img/ai-agent-for-hr/4.svg https://kogents.ai/assets/img/ai-agent-for-hr/5.svg https://kogents.ai/assets/img/ai-agent-for-hr/6.svg https://kogents.ai/assets/img/ai-agent-for-hr/7.svg https://kogents.ai/assets/img/ai-agent-for-hr/8.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/solutions/ai-agent-for-education/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-agent-for-education/banner.webp https://kogents.ai/assets/img/ai-agent-for-education/1.svg https://kogents.ai/assets/img/ai-agent-for-education/2.svg https://kogents.ai/assets/img/ai-agent-for-education/3.svg https://kogents.ai/assets/img/ai-agent-for-education/4.svg https://kogents.ai/assets/img/ai-agent-for-education/5.svg https://kogents.ai/assets/img/ai-agent-for-education/6.svg https://kogents.ai/assets/img/ai-agent-for-education/7.svg https://kogents.ai/assets/img/ai-agent-for-education/8.svg https://kogents.ai/assets/img/ai-agent-for-education/9.svg https://kogents.ai/assets/img/ai-agent-for-education/10.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/about-us/ 2025-10-03 daily 0.9 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fmembers.png&w=1080&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam%2F1.png&w=640&q=75 https://kogents.ai/assets/img/icons/linkedin.svg https://kogents.ai/assets/img/icons/x.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam%2F2.png&w=640&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam%2F3.png&w=640&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam%2F4.png&w=640&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam%2F5.png&w=640&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam%2F6.png&w=640&q=75
https://kogents.ai/platforms/whatsapp-ai-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-whatsapp/whatsapp-banner.webp https://kogents.ai/assets/img/ai-whatsapp/1.svg https://kogents.ai/assets/img/ai-whatsapp/2.svg https://kogents.ai/assets/img/ai-whatsapp/3.svg https://kogents.ai/assets/img/ai-whatsapp/4.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-whatsapp%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-whatsapp%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-whatsapp%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-whatsapp%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-whatsapp%2F5.webp&w=1920&q=75
https://kogents.ai/solutions/ai-teacher-assistant/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-teacher-assistant/banner.webp https://kogents.ai/assets/img/ai-teacher-assistant/1.svg https://kogents.ai/assets/img/ai-teacher-assistant/2.svg https://kogents.ai/assets/img/ai-teacher-assistant/3.svg https://kogents.ai/assets/img/ai-teacher-assistant/4.svg https://kogents.ai/assets/img/ai-teacher-assistant/5.svg https://kogents.ai/assets/img/ai-teacher-assistant/6.svg https://kogents.ai/assets/img/ai-teacher-assistant/7.svg https://kogents.ai/assets/img/ai-teacher-assistant/8.svg https://kogents.ai/assets/img/ai-teacher-assistant/9.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/platforms/instagram-agent-ai/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-instagram/banner.webp https://kogents.ai/assets/img/ai-instagram/1.svg https://kogents.ai/assets/img/ai-instagram/2.svg https://kogents.ai/assets/img/ai-instagram/3.svg https://kogents.ai/assets/img/ai-instagram/4.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-instagram%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-instagram%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-instagram%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-instagram%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-instagram%2F5.webp&w=1920&q=75
https://kogents.ai/platforms/ai-agent-for-messenger/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/messenger-banner.webp https://kogents.ai/assets/img/ai-messenger/1.svg https://kogents.ai/assets/img/ai-messenger/2.svg https://kogents.ai/assets/img/ai-messenger/3.svg https://kogents.ai/assets/img/ai-messenger/4.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-messenger%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-messenger%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-messenger%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-messenger%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-messenger%2F5.webp&w=1920&q=75
https://kogents.ai/solutions/healthcare-ai-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-healthcare/banner.webp https://kogents.ai/assets/img/ai-healthcare/1.svg https://kogents.ai/assets/img/ai-healthcare/2.svg https://kogents.ai/assets/img/ai-healthcare/3.svg https://kogents.ai/assets/img/ai-healthcare/4.svg https://kogents.ai/assets/img/ai-healthcare/5.svg https://kogents.ai/assets/img/ai-healthcare/6.svg https://kogents.ai/assets/img/ai-healthcare/7.svg https://kogents.ai/assets/img/ai-healthcare/8.svg https://kogents.ai/assets/img/ai-healthcare/9.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/solutions/survey-ai-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/survey-ai-agent/banner.webp https://kogents.ai/assets/img/survey-ai-agent/1.svg https://kogents.ai/assets/img/survey-ai-agent/2.svg https://kogents.ai/assets/img/survey-ai-agent/3.svg https://kogents.ai/assets/img/survey-ai-agent/4.svg https://kogents.ai/assets/img/survey-ai-agent/5.svg https://kogents.ai/assets/img/survey-ai-agent/6.svg https://kogents.ai/assets/img/survey-ai-agent/7.svg https://kogents.ai/assets/img/survey-ai-agent/8.svg https://kogents.ai/assets/img/survey-ai-agent/9.svg https://kogents.ai/assets/img/survey-ai-agent/10.svg https://kogents.ai/assets/img/survey-ai-agent/11.svg https://kogents.ai/assets/img/survey-ai-agent/12.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/solutions/ai-agent-event-planner/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-agent-event-planner/banner.webp https://kogents.ai/assets/img/ai-agent-event-planner/1.svg https://kogents.ai/assets/img/ai-agent-event-planner/2.svg https://kogents.ai/assets/img/ai-agent-event-planner/3.svg https://kogents.ai/assets/img/ai-agent-event-planner/4.svg https://kogents.ai/assets/img/ai-agent-event-planner/5.svg https://kogents.ai/assets/img/ai-agent-event-planner/6.svg https://kogents.ai/assets/img/ai-agent-event-planner/7.svg https://kogents.ai/assets/img/ai-agent-event-planner/8.svg https://kogents.ai/assets/img/ai-agent-event-planner/9.svg https://kogents.ai/assets/img/ai-agent-event-planner/10.svg https://kogents.ai/assets/img/ai-agent-event-planner/11.svg https://kogents.ai/assets/img/ai-agent-event-planner/12.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/platforms/zendesk-ai-integration/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-zendesk/banner.webp https://kogents.ai/assets/img/ai-zendesk/1.svg https://kogents.ai/assets/img/ai-zendesk/2.svg https://kogents.ai/assets/img/ai-zendesk/3.svg https://kogents.ai/assets/img/ai-zendesk/44.svg https://kogents.ai/assets/img/ai-zendesk/5.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-zendesk%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-zendesk%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-zendesk%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-zendesk%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-zendesk%2F5.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-zendesk%2F6.webp&w=1920&q=75
https://kogents.ai/security/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/badegs.webp
https://kogents.ai/solutions/ai-agent-dashboard/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-agent-dashboard/banner.webp https://kogents.ai/assets/img/ai-agent-dashboard/1.svg https://kogents.ai/assets/img/ai-agent-dashboard/2.svg https://kogents.ai/assets/img/ai-agent-dashboard/3.svg https://kogents.ai/assets/img/ai-agent-dashboard/4.svg https://kogents.ai/assets/img/ai-agent-dashboard/5.svg https://kogents.ai/assets/img/ai-agent-dashboard/6.svg https://kogents.ai/assets/img/ai-agent-dashboard/7.svg https://kogents.ai/assets/img/ai-agent-dashboard/8.svg https://kogents.ai/assets/img/ai-agent-dashboard/9.svg https://kogents.ai/assets/img/brand/brand1.svg https://kogents.ai/assets/img/brand/brand2.svg https://kogents.ai/assets/img/brand/brand3.svg https://kogents.ai/assets/img/brand/brand4.svg https://kogents.ai/assets/img/brand/brand5.svg
https://kogents.ai/platforms/viber-ai-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-viber/banner.webp https://kogents.ai/assets/img/ai-viber/1.svg https://kogents.ai/assets/img/ai-viber/2.svg https://kogents.ai/assets/img/ai-viber/3.svg https://kogents.ai/assets/img/ai-viber/4.svg https://kogents.ai/assets/img/ai-viber/5.svg https://kogents.ai/assets/img/ai-viber/6.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-viber%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-viber%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-viber%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-viber%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-viber%2F5.webp&w=1920&q=75
https://kogents.ai/contact-us/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/phone.svg https://kogents.ai/assets/img/email.svg https://kogents.ai/assets/img/address.svg https://kogents.ai/assets/img/facebook.svg https://kogents.ai/assets/img/linkedin.svg https://kogents.ai/assets/img/twitter.svg https://kogents.ai/assets/img/youtube.svg https://kogents.ai/assets/img/instagram.svg https://kogents.ai/assets/img/pinterest.svg https://kogents.ai/assets/img/tiktok.svg
https://kogents.ai/solutions/ 2025-10-03 daily 0.9 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam-slider%2Fclient-call-log-ai-agent.webp&w=1080&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam-slider%2Fsupport-satisfaction-ai-agent.webp&w=1080&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam-slider%2Fsupport-request-ai-agent.webp&w=1080&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam-slider%2Fcustomer-support-ai-agent.webp&w=1080&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fteam-slider%2Fcustomer-service-ai-agent.webp&w=1080&q=75 https://kogents.ai/assets/img/ai-agent-dashboard/5.svg https://kogents.ai/assets/img/ai-agent-dashboard/6.svg https://kogents.ai/assets/img/ai-agent-dashboard/7.svg https://kogents.ai/assets/img/ai-agent-dashboard/8.svg
https://kogents.ai/platforms/ai-telegram-agent/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-telegram/banner.webp https://kogents.ai/assets/img/ai-telegram/1.svg https://kogents.ai/assets/img/ai-telegram/2.svg https://kogents.ai/assets/img/ai-telegram/3.svg https://kogents.ai/assets/img/ai-telegram/4.svg https://kogents.ai/assets/img/ai-telegram/5.svg https://kogents.ai/assets/img/ai-telegram/6.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-telegram%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-telegram%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-telegram%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-telegram%2F4.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-telegram%2F5.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-telegram%2F6.webp&w=1920&q=75
https://kogents.ai/platforms/microsoft-teams-agents/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-microsoft/banner.webp https://kogents.ai/assets/img/ai-microsoft/1.svg https://kogents.ai/assets/img/ai-microsoft/2.svg https://kogents.ai/assets/img/ai-microsoft/3.svg https://kogents.ai/assets/img/ai-microsoft/4.svg https://kogents.ai/assets/img/ai-microsoft/5.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-microsoft%2F4.webp&w=1920&q=75
https://kogents.ai/platforms/calendly-ai-integration/ 2025-10-03 daily 0.9 https://kogents.ai/assets/img/ai-calendly/banner.webp https://kogents.ai/assets/img/ai-calendly/1.svg https://kogents.ai/assets/img/ai-calendly/2.svg https://kogents.ai/assets/img/ai-calendly/3.svg https://kogents.ai/assets/img/ai-calendly/4.svg https://kogents.ai/assets/img/ai-calendly/5.svg https://kogents.ai/assets/img/ai-calendly/6.svg https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-calendly%2F1.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-calendly%2F2.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-calendly%2F3.webp&w=1920&q=75 https://kogents.ai/_next/image/?url=%2Fassets%2Fimg%2Fai-calendly%2F4.webp&w=1920&q=75
`.trim();

/* ===================== PARSER + HELPERS ===================== */

const isAbsUrl = (u: string) => /^https?:\/\//i.test(u);
const isKogentsUrl = (u: string) => u.startsWith(SITE);
const isPageUrl = (u: string) => isKogentsUrl(u) && !u.includes("/assets/");
const isNextOptimized = (u: string) => u.includes("/_next/image");
const maybeDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s);
const maybeChangefreq = (s: string) =>
  /^(always|hourly|daily|weekly|monthly|yearly|never)$/i.test(s);
const maybePriority = (s: string) => /^(0(\.\d+)?|1(\.0+)?)$/.test(s);
const isAssetLikely = (u: string) =>
  /\.(webp|png|jpg|jpeg|gif|svg|avif)$/i.test(u) && u.includes("/assets/");

function decodeNextImageUrl(u: string): string | null {
  try {
    // Example: /_next/image/?url=%2Fassets%2Fimg%2Fhome%2Fai-chatbot-agent.webp&w=1920&q=75
    const q = u.split("?")[1] || "";
    const params = new URLSearchParams(q);
    const raw = params.get("url"); // e.g., /assets/img/home/ai-chatbot-agent.webp
    if (!raw) return null;
    const decoded = decodeURIComponent(raw);
    if (!decoded.startsWith("/")) return null;
    const abs = SITE + decoded;
    return isAssetLikely(abs) ? abs : null;
  } catch {
    return null;
  }
}

function normalizeImageUrl(u: string): string | null {
  if (!isAbsUrl(u)) return null;
  if (!isKogentsUrl(u)) return null;
  if (isNextOptimized(u)) {
    return decodeNextImageUrl(u);
  }
  return isAssetLikely(u) ? u : null;
}

function parseRawToEntries(raw: string): ImageEntry[] {
  const tokens = raw
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

  const entries: ImageEntry[] = [];
  let i = 0;

  while (i < tokens.length) {
    const t = tokens[i];

    // Detect a page header: <pageUrl> <YYYY-MM-DD> <changefreq> <priority>
    if (isPageUrl(t) && i + 3 < tokens.length && maybeDate(tokens[i + 1]) && maybeChangefreq(tokens[i + 2]) && maybePriority(tokens[i + 3])) {
      const pageUrl = stripTrailingSlash(tokens[i]);
      i += 4;

      const images: string[] = [];
      // Collect image urls until the next header or end
      while (i < tokens.length) {
        const probe = tokens[i];
        // If next token looks like a new page header, break
        if (isPageUrl(probe) && i + 3 < tokens.length && maybeDate(tokens[i + 1]) && maybeChangefreq(tokens[i + 2]) && maybePriority(tokens[i + 3])) {
          break;
        }

        // Try normalize image
        const img = normalizeImageUrl(probe);
        if (img) images.push(img);

        i += 1;
      }

      // De-dupe & keep order
      const deduped = Array.from(new Set(images));
      entries.push({ pageLoc: pageUrl, images: deduped });
    } else {
      // Not a header → advance
      i += 1;
    }
  }

  // Filter out pages with no images to keep sitemap compact
  return entries.filter(e => e.images.length > 0);
}

function stripTrailingSlash(u: string) {
  if (u === SITE + "/") return u; // keep root slash
  return u.endsWith("/") ? u.slice(0, -1) + "/" : u;
}

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ===================== XML BUILDER ===================== */

function buildImageSitemap(entries: ImageEntry[]): string {
  const urlsXml = entries
    .map((e) => {
      const imgs = e.images
        .map(
          (src) => `
    <image:image>
      <image:loc>${xmlEscape(src)}</image:loc>
    </image:image>`
        )
        .join("");

      return `
  <url>
    <loc>${xmlEscape(e.pageLoc)}</loc>${imgs}
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>${urlsXml}
</urlset>`;
}

/* ===================== NEXT.JS HANDLER ===================== */

export const runtime = "edge"; // optional: faster on Vercel/Edge

export async function GET() {
  const entries = parseRawToEntries(RAW);

  const xml = buildImageSitemap(entries);
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // Cache for 24h; adjust as you like
      "Cache-Control": "public, s-maxage=86400, max-age=86400",
    },
  });
}
