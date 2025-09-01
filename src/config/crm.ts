// CRM Configuration
export const CRM_CONFIG = {
  // CRM Base URL
  BASE_URL: 'https://kogents.ai/',
  
  // CRM Endpoint
  ENDPOINT: 'crm/lead/create/contact',
  
  // Request timeout in milliseconds
  TIMEOUT: 30000,
  
  // User Agent for CRM requests
  USER_AGENT: 'Kogents-AI-CRM/1.0',
};

// Helper function to get full CRM URL
export const getCRMUrl = (encodedData: string): string => {
  return `${CRM_CONFIG.BASE_URL}${CRM_CONFIG.ENDPOINT}/${encodedData}`;
};
