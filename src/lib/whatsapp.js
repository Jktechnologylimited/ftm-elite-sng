// Update this to FTM Elite Services' real WhatsApp number (with country code, no spaces or symbols).
export const WHATSAPP_NUMBER = "2348012345678";

export function waLink(message) {
  const text = encodeURIComponent(
    message || "Hello FTM Elite Services, I'd like to book a consultation."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const CONTACT_EMAIL = "hello@ftmeliteservices.com";
export const CONTACT_PHONE_DISPLAY = "+234 801 234 5678";
