"use client";

import { useEffect } from "react";

type CheckoutIframeModalProps = {
  checkoutUrl: string;
  onClose: () => void;
};

export function CheckoutIframeModal({ checkoutUrl, onClose }: CheckoutIframeModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="checkoutModal" role="dialog" aria-modal="true" aria-label="Checkout Vyria">
      <button type="button" className="checkoutBackdrop" onClick={onClose} aria-label="Fechar checkout" />

      <div className="checkoutPanel">
        <div className="checkoutHeader">
          <div>
            <span>Checkout seguro</span>
            <strong>Finalize sua assinatura Vyria</strong>
          </div>
          <button type="button" className="checkoutClose" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </div>

        <iframe
          className="checkoutFrame"
          src={checkoutUrl}
          title="Checkout Vyria"
          allow="payment *"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <style jsx>{`
        .checkoutModal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          font-family: var(--font-inter), sans-serif;
        }

        .checkoutBackdrop {
          position: absolute;
          inset: 0;
          border: 0;
          background: rgba(8, 8, 8, 0.68);
          backdrop-filter: blur(7px);
          cursor: pointer;
          animation: checkoutFade 0.2s ease both;
        }

        .checkoutPanel {
          position: relative;
          z-index: 1;
          width: min(1080px, 96vw);
          height: min(860px, 92vh);
          border: 1px solid rgba(232, 82, 26, 0.22);
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 34px 100px rgba(0, 0, 0, 0.38);
          animation: checkoutEnter 0.24s ease both;
        }

        .checkoutHeader {
          min-height: 64px;
          padding: 12px 14px 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          color: #111827;
          background: linear-gradient(180deg, #fff 0%, #f8fafc 100%);
          border-bottom: 1px solid #e5e7eb;
        }

        .checkoutHeader span,
        .checkoutHeader strong {
          display: block;
        }

        .checkoutHeader span {
          color: #e8521a;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .checkoutHeader strong {
          margin-top: 3px;
          font-size: 15px;
          line-height: 1.2;
        }

        .checkoutClose {
          width: 38px;
          height: 38px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #374151;
          background: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .checkoutClose:hover {
          color: #111827;
          border-color: #e8521a;
          transform: translateY(-1px);
        }

        .checkoutFrame {
          width: 100%;
          height: 100%;
          flex: 1;
          border: 0;
          background: #fff;
        }

        @keyframes checkoutFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes checkoutEnter {
          from {
            opacity: 0;
            transform: scale(0.97) translateY(10px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 640px) {
          .checkoutModal {
            padding: 0;
          }

          .checkoutPanel {
            width: 100vw;
            height: 100dvh;
            border-radius: 0;
            border: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .checkoutBackdrop,
          .checkoutPanel {
            animation: none;
          }

          .checkoutClose {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
