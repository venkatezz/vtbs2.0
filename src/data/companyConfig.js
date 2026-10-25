/**
 * Centralized company contact information and configuration.
 * All phone and WhatsApp links reuse this verified configuration.
 */
export const COMPANY_CONTACT = {
  phone: '+91 89250 63980',
  phoneTel: '+918925063980',
  whatsappDigits: '918925063980',
  email: 'vtconsulting.in@gmail.com',
  defaultWhatsAppMessage: 'Hello VT Business Solutions, I would like to enquire about your services.',
  getWhatsAppUrl(customMessage) {
    const text = customMessage || this.defaultWhatsAppMessage;
    return `https://wa.me/${this.whatsappDigits}?text=${encodeURIComponent(text)}`;
  }
};
