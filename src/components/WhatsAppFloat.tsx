import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const phoneNumber = "917778024448"; // 👉 replace with your WhatsApp number
  const message = "Hi, I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white rounded-full
        w-14 h-14 flex items-center justify-center
        shadow-xl
        transition-all duration-300 hover:scale-110
      "
    >
      <MessageCircle size={26} />
    </a>
  );
};
