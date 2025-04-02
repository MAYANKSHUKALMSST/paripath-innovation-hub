
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "918177063899"; // WhatsApp requires country code without +
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
      <span className="sr-only">Contact us on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
