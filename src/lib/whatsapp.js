export const WHATSAPP_NUMBER = "2348066794774";

export function waLink(message) {
  const text = encodeURIComponent(
    message || "Hello FTM Elite Services, I'd like to book a consultation."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// export const CONTACT_EMAIL = "hello@ftmeliteservices.com";
export const CONTACT_PHONE_DISPLAY = "+234 806 679 4774";
export const INSTAGRAM_HANDLE = "ftm_eliteservices";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
