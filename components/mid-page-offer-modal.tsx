"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_TRIGGER_PERCENT = 0.2;
const WHATSAPP_LINK =
  "https://wa.me/5562994856542?text=Ola%21%20Quero%20ativar%20meu%20setup%20gratis.";

const benefits = [
  "Configuração completa da operação",
  "Importação do cardápio",
  "Integração WhatsApp",
  "Suporte na implantação",
  "Primeiro acesso acompanhado"
] as const;

export function MidPageOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const maxScrollable = documentHeight - viewportHeight;

        ticking = false;

        if (maxScrollable <= 0) return;

        const scrollPercent = window.scrollY / maxScrollable;

        if (scrollPercent >= SCROLL_TRIGGER_PERCENT && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setIsOpen(true);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  function handlePrimaryCta() {
    closeModal();
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  }

  if (!isOpen) return null;

  return (
    <div className="midOfferModal" role="dialog" aria-modal="true" aria-labelledby="midOfferTitle">
      <button type="button" className="midOfferBackdrop" onClick={closeModal} aria-label="Fechar oferta" />

      <div className="midOfferPanel">
        <button type="button" className="midOfferClose" onClick={closeModal} aria-label="Fechar">
          ×
        </button>

        <div className="midOfferTopline">Oportunidade de implantação</div>
        <h2 id="midOfferTitle">🔥 Instalação Grátis por Tempo Limitado</h2>
        <p className="midOfferText">Economize R$299 na implantação do seu sistema.</p>

        <div className="midOfferHighlight">10 instalações gratuitas disponíveis neste ciclo.</div>

        <ul className="midOfferBenefits">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <span aria-hidden="true">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="midOfferActions">
          <button type="button" className="midOfferPrimary" onClick={handlePrimaryCta}>
            Quero Garantir Minha Vaga
          </button>
          <button type="button" className="midOfferSecondary" onClick={closeModal}>
            Continuar Navegando
          </button>
        </div>
      </div>

      <style jsx>{`
        .midOfferModal {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          font-family: var(--font-inter), sans-serif;
        }

        .midOfferBackdrop {
          position: absolute;
          inset: 0;
          border: 0;
          background: rgba(8, 8, 8, 0.58);
          backdrop-filter: blur(6px);
          cursor: pointer;
          animation: midOfferFade 0.22s ease both;
        }

        .midOfferPanel {
          position: relative;
          z-index: 1;
          width: min(520px, 100%);
          border: 1px solid rgba(232, 82, 26, 0.18);
          border-radius: 28px;
          padding: 34px;
          color: #151515;
          background:
            radial-gradient(circle at 12% 0%, rgba(232, 82, 26, 0.12), transparent 34%),
            linear-gradient(180deg, #ffffff 0%, #f9f7f4 100%);
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.32);
          animation: midOfferEnter 0.28s ease both;
        }

        .midOfferClose {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border: 1px solid #ece4dc;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #555;
          background: rgba(255, 255, 255, 0.82);
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .midOfferClose:hover {
          color: #151515;
          background: #fff;
          transform: translateY(-1px);
        }

        .midOfferTopline {
          width: fit-content;
          margin-bottom: 14px;
          border: 1px solid rgba(232, 82, 26, 0.2);
          border-radius: 999px;
          padding: 7px 11px;
          color: #e8521a;
          background: #fff4ee;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .midOfferPanel h2 {
          max-width: 420px;
          margin: 0;
          color: #111;
          font-size: clamp(28px, 5.5vw, 42px);
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        .midOfferText {
          margin: 14px 0 0;
          color: #4f4f4f;
          font-size: 17px;
          line-height: 1.6;
        }

        .midOfferHighlight {
          margin-top: 20px;
          border: 1px solid #ead8cc;
          border-radius: 18px;
          padding: 14px 16px;
          color: #1f1f1f;
          background: rgba(255, 255, 255, 0.78);
          font-size: 15px;
          font-weight: 800;
          line-height: 1.45;
          box-shadow: 0 14px 34px rgba(16, 16, 16, 0.06);
        }

        .midOfferBenefits {
          display: grid;
          gap: 10px;
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .midOfferBenefits li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #242424;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 600;
        }

        .midOfferBenefits span {
          width: 22px;
          height: 22px;
          flex: 0 0 22px;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          color: #0f7a43;
          background: #dff7ea;
          font-size: 13px;
          font-weight: 900;
        }

        .midOfferActions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 26px;
        }

        .midOfferPrimary,
        .midOfferSecondary {
          min-height: 48px;
          border-radius: 14px;
          padding: 13px 18px;
          font: inherit;
          font-weight: 800;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .midOfferPrimary {
          border: 1px solid #e8521a;
          color: #fff;
          background: #e8521a;
          box-shadow: 0 16px 34px rgba(232, 82, 26, 0.24);
        }

        .midOfferSecondary {
          border: 1px solid #e5ded7;
          color: #333;
          background: rgba(255, 255, 255, 0.72);
        }

        .midOfferPrimary:hover,
        .midOfferSecondary:hover {
          transform: translateY(-1px);
          filter: brightness(0.98);
        }

        @keyframes midOfferFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes midOfferEnter {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(10px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 560px) {
          .midOfferModal {
            align-items: flex-end;
            padding: 14px;
          }

          .midOfferPanel {
            max-height: calc(100vh - 28px);
            overflow-y: auto;
            border-radius: 24px;
            padding: 28px 22px 22px;
          }

          .midOfferClose {
            top: 12px;
            right: 12px;
          }

          .midOfferTopline {
            max-width: calc(100% - 44px);
            font-size: 10.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .midOfferBackdrop,
          .midOfferPanel {
            animation: none;
          }

          .midOfferPrimary,
          .midOfferSecondary,
          .midOfferClose {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
