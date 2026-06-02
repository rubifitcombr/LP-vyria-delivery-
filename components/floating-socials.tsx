"use client";

import { usePathname } from "next/navigation";

const DEFAULT_WHATSAPP_LINK =
  "https://wa.me/5562994856542?text=Ola!%20Quero%20uma%20demonstracao%20da%20Vyria.";

const WHATSAPP_LINKS_BY_PATH: Record<string, string> = {
  "/autoatendimento":
    "https://wa.me/5562994856542?text=Ol%C3%A1!%20Quero%20conhecer%20o%20autoatendimento%20da%20Vyria.",
  "/whatsapp":
    "https://wa.me/5562994856542?text=Ol%C3%A1!%20Quero%20conhecer%20o%20rob%C3%B4%20de%20WhatsApp%20da%20Vyria.",
  "/organizacao":
    "https://wa.me/5562994856542?text=Ol%C3%A1!%20Quero%20conhecer%20a%20gest%C3%A3o%20de%20pedidos%20e%20KDS%20da%20Vyria."
};

export function FloatingSocials() {
  const pathname = usePathname();
  const matchingPath = Object.keys(WHATSAPP_LINKS_BY_PATH).find((path) =>
    pathname === path || pathname?.startsWith(`${path}/`)
  );
  const whatsappLink =
    (matchingPath ? WHATSAPP_LINKS_BY_PATH[matchingPath] : undefined) ??
    DEFAULT_WHATSAPP_LINK;

  return (
    <div className="floatingSocials" aria-label="Canais de contato">
      <a
        className="floatingSocial floatingWhatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Vyria no WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12.04 4A7.93 7.93 0 0 0 4.1 11.94c0 1.4.36 2.77 1.05 3.97L4 20l4.2-1.1a7.92 7.92 0 0 0 3.84.98A7.94 7.94 0 1 0 12.04 4Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M9.2 8.55c-.16-.36-.33-.37-.49-.38h-.42c-.14 0-.37.05-.56.26-.19.21-.74.72-.74 1.76s.76 2.04.86 2.18c.1.14 1.47 2.35 3.65 3.2 1.8.7 2.17.56 2.56.52.39-.04 1.27-.52 1.45-1.02.18-.5.18-.93.13-1.02-.05-.09-.19-.14-.4-.25-.21-.1-1.27-.63-1.47-.7-.2-.07-.34-.1-.49.1-.14.21-.56.7-.69.84-.13.14-.25.16-.47.05-.21-.1-.9-.33-1.72-1.06-.64-.57-1.07-1.27-1.2-1.48-.13-.21-.01-.33.1-.43.1-.1.21-.25.32-.37.1-.12.14-.21.21-.35.07-.14.04-.26-.02-.37-.05-.1-.47-1.15-.65-1.48Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        className="floatingSocial floatingInstagram"
        href="https://www.instagram.com/vyriadelivery/"
        target="_blank"
        rel="noreferrer"
        aria-label="Ver a Vyria no Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="5"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17" cy="7" r="1.1" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
