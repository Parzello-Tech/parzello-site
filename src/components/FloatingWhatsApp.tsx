"use client";

import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
    phoneNumber?: string;
    message?: string;
}

export const FloatingWhatsApp = ({
    phoneNumber = "6285161787501",
    message = "Halo Tim *Parzello Tech*  Saya ingin konsultasi proyek.",
}: FloatingWhatsAppProps) => {
    const encodedMessage = encodeURIComponent(message);
    const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform duration-200 hover:scale-110"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
};
