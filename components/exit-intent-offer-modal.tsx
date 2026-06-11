"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "vyria_exit_offer_shown";
const WHATSAPP_LINK =
  "https://wa.me/5562994856542?text=Ola%21%20Quero%20ativar%20meu%20setup%20gratis.";

const benefits = [
  "Setup grátis (R$299)",
  "Primeira semana grátis",
  "Consultoria 1:1 de implantação",
  "Importação do cardápio automática"
] as const;

function hasOfferAlreadyShown() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function markOfferAsShown() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "true");
  } catch {
    // Ignore storage restrictions; in-memory state still prevents repeat opens.
  }
}

function isMobileExitEnvironment() {
  return window.matchMedia("(hover: none), (pointer: coarse), (max-width: 768px)").matches;
}

export function ExitIntentOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggeredRef = useRef(false);
  const openTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function openOffer() {
      if (hasTriggeredRef.current || hasOfferAlreadyShown()) return;

      hasTriggeredRef.current = true;
      markOfferAsShown();
      window.scrollTo({ top: 0, behavior: "smooth" });

      openTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(true);
      }, 220);
    }

    function handleMouseOut(event: MouseEvent) {
      const isLeavingTop = event.clientY <= 0;
      const hasNextTarget = Boolean(event.relatedTarget);

      if (!isLeavingTop || hasNextTarget) return;

      openOffer();
    }

    function handlePopState() {
      if (!isMobileExitEnvironment()) return;

      if (hasOfferAlreadyShown()) return;

      window.history.pushState(
        { ...(window.history.state ?? {}), vyriaExitOfferGuard: true },
        "",
        window.location.href
      );
      openOffer();
    }

    document.addEventListener("mouseout", handleMouseOut);

    if (isMobileExitEnvironment() && !window.history.state?.vyriaExitOfferGuard) {
      window.history.pushState(
        { ...(window.history.state ?? {}), vyriaExitOfferGuard: true },
        "",
        window.location.href
      );
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("popstate", handlePopState);

      if (openTimeoutRef.current) {
        window.clearTimeout(openTimeoutRef.current);
      }
    };
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

  function handleWhatsApp() {
    closeModal();
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  }

  if (!isOpen) return null;

  return (
    <div className="exitOfferModal" role="dialog" aria-modal="true" aria-labelledby="exitOfferTitle">
      <button type="button" className="exitOfferBackdrop" onClick={closeModal} aria-label="Fechar oferta" />

      <div className="exitOfferPanel">
        <button type="button" className="exitOfferClose" onClick={closeModal} aria-label="Fechar">
          ×
        </button>

        <p className="exitOfferEyebrow">Condição exclusiva liberada</p>
        <h2 id="exitOfferTitle">🎁 BÔNUS DESBLOQUEADO</h2>
        <p className="exitOfferSubtitle">
          Você chegou até aqui e liberou uma condição exclusiva para novos clientes.
        </p>

        <div className="exitOfferSavings">
          <span>Economia imediata</span>
          <strong>R$299</strong>
          <small>em setup grátis</small>
        </div>

        <ul className="exitOfferBenefits">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <span aria-hidden="true">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="exitOfferActions">
          <button type="button" className="exitOfferPrimary" onClick={handleWhatsApp}>
            Ativar Bônus Agora →
          </button>
          <button type="button" className="exitOfferSecondary" onClick={handleWhatsApp}>
            Falar com Especialista
          </button>
        </div>

        <p className="exitOfferFooter">Válido apenas para novos clientes.</p>
      </div>

      <style jsx>{`
        .exitOfferModal {
          position: fixed;
          inset: 0;
          z-index: 90;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          font-family: var(--font-inter), sans-serif;
        }

        .exitOfferBackdrop {
          position: absolute;
          inset: 0;
          border: 0;
          background: rgba(8, 8, 8, 0.62);
          backdrop-filter: blur(7px);
          cursor: pointer;
          animation: exitOfferFade 0.22s ease both;
        }

        .exitOfferPanel {
          position: relative;
          z-index: 1;
          width: min(540px, 100%);
          border: 1px solid rgba(232, 82, 26, 0.18);
          border-radius: 30px;
          padding: 36px;
          color: #161616;
          text-align: center;
          background:
            radial-gradient(circle at 50% -10%, rgba(232, 82, 26, 0.16), transparent 34%),
            linear-gradient(180deg, #fff 0%, #f9f7f4 100%);
          box-shadow: 0 34px 100px rgba(0, 0, 0, 0.34);
          animation: exitOfferEnter 0.28s ease both;
        }

        .exitOfferClose {
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

        .exitOfferClose:hover {
          color: #151515;
          background: #fff;
          transform: translateY(-1px);
        }

        .exitOfferEyebrow {
          width: fit-content;
          margin: 0 auto 14px;
          border: 1px solid rgba(232, 82, 26, 0.2);
          border-radius: 999px;
          padding: 7px 12px;
          color: #e8521a;
          background: #fff4ee;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .exitOfferPanel h2 {
          margin: 0;
          color: #111;
          font-size: clamp(30px, 6vw, 44px);
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        .exitOfferSubtitle {
          max-width: 430px;
          margin: 14px auto 0;
          color: #4b4b4b;
          font-size: 16px;
          line-height: 1.6;
        }

        .exitOfferSavings {
          margin: 22px auto 0;
          border: 1px solid #ead8cc;
          border-radius: 22px;
          padding: 18px;
          display: grid;
          justify-items: center;
          gap: 2px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 16px 34px rgba(16, 16, 16, 0.06);
        }

        .exitOfferSavings span,
        .exitOfferSavings small {
          color: #666;
          font-size: 13px;
          font-weight: 700;
        }

        .exitOfferSavings strong {
          color: #e8521a;
          font-size: 38px;
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .exitOfferBenefits {
          display: grid;
          gap: 10px;
          margin: 24px auto 0;
          padding: 0;
          list-style: none;
          text-align: left;
        }

        .exitOfferBenefits li {
          border: 1px solid #eee6df;
          border-radius: 14px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #222;
          background: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          font-weight: 700;
          line-height: 1.35;
        }

        .exitOfferBenefits span {
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

        .exitOfferActions {
          display: grid;
          gap: 10px;
          margin-top: 26px;
        }

        .exitOfferPrimary,
        .exitOfferSecondary {
          min-height: 50px;
          border-radius: 15px;
          padding: 14px 18px;
          font: inherit;
          font-weight: 900;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .exitOfferPrimary {
          border: 1px solid #e8521a;
          color: #fff;
          background: #e8521a;
          box-shadow: 0 18px 38px rgba(232, 82, 26, 0.28);
        }

        .exitOfferSecondary {
          border: 1px solid #e5ded7;
          color: #2c2c2c;
          background: rgba(255, 255, 255, 0.78);
        }

        .exitOfferPrimary:hover,
        .exitOfferSecondary:hover {
          transform: translateY(-1px);
          filter: brightness(0.98);
        }

        .exitOfferFooter {
          margin: 14px 0 0;
          color: #747474;
          font-size: 12px;
          font-weight: 700;
        }

        @keyframes exitOfferFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes exitOfferEnter {
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
          .exitOfferModal {
            align-items: flex-end;
            padding: 14px;
          }

          .exitOfferPanel {
            max-height: calc(100vh - 28px);
            overflow-y: auto;
            border-radius: 24px;
            padding: 28px 20px 22px;
          }

          .exitOfferBenefits li {
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .exitOfferBackdrop,
          .exitOfferPanel {
            animation: none;
          }

          .exitOfferPrimary,
          .exitOfferSecondary {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
