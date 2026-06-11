"use client";

import { useEffect, useRef, useState } from "react";

type CheckoutIframeModalProps = {
  checkoutUrl: string;
  onClose: () => void;
};

export function CheckoutIframeModal({ checkoutUrl, onClose }: CheckoutIframeModalProps) {
  const [frameKey, setFrameKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadIssue, setHasLoadIssue] = useState(false);
  const loadTimeoutRef = useRef<number | null>(null);

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

  useEffect(() => {
    setIsLoading(true);
    setHasLoadIssue(false);

    if (loadTimeoutRef.current) {
      window.clearTimeout(loadTimeoutRef.current);
    }

    loadTimeoutRef.current = window.setTimeout(() => {
      setHasLoadIssue(true);
      setIsLoading(false);
    }, 14000);

    return () => {
      if (loadTimeoutRef.current) {
        window.clearTimeout(loadTimeoutRef.current);
      }
    };
  }, [checkoutUrl, frameKey]);

  function reloadCheckout() {
    setFrameKey((currentKey) => currentKey + 1);
  }

  function handleFrameLoad() {
    if (loadTimeoutRef.current) {
      window.clearTimeout(loadTimeoutRef.current);
    }

    setIsLoading(false);
    setHasLoadIssue(false);
  }

  return (
    <div className="checkoutModal" role="dialog" aria-modal="true" aria-label="Checkout Vyria">
      <button type="button" className="checkoutBackdrop" onClick={onClose} aria-label="Fechar checkout" />

      <div className="checkoutPanel">
        <div className="checkoutHeader">
          <div>
            <span>Checkout seguro</span>
            <strong>Finalize sua assinatura Vyria</strong>
          </div>
          <div className="checkoutHeaderActions">
            <button type="button" className="checkoutReload" onClick={reloadCheckout}>
              Recarregar
            </button>
            <button type="button" className="checkoutClose" onClick={onClose} aria-label="Fechar">
              ×
            </button>
          </div>
        </div>

        <div className="checkoutBody">
          {isLoading ? (
            <div className="checkoutLoading" role="status" aria-live="polite">
              <span className="checkoutSpinner" aria-hidden="true" />
              <strong>Carregando checkout seguro...</strong>
              <small>Estamos abrindo o pagamento dentro da página.</small>
            </div>
          ) : null}

          {hasLoadIssue ? (
            <div className="checkoutFallback" role="alert">
              <strong>O checkout demorou para responder.</strong>
              <p>Recarregue o checkout para tentar novamente sem sair desta página.</p>
              <button type="button" onClick={reloadCheckout}>
                Recarregar checkout
              </button>
            </div>
          ) : null}

          <iframe
            key={`${checkoutUrl}-${frameKey}`}
            className={`checkoutFrame ${isLoading || hasLoadIssue ? "checkoutFrameHidden" : ""}`}
            src={checkoutUrl}
            title="Checkout Vyria"
            allow="payment"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={handleFrameLoad}
          />
        </div>
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

        .checkoutHeaderActions {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .checkoutReload {
          min-height: 38px;
          border: 1px solid #fed7aa;
          border-radius: 999px;
          padding: 8px 12px;
          color: #c2410c;
          background: #fff7ed;
          font: inherit;
          font-size: 12px;
          font-weight: 900;
          cursor: pointer;
          transition: 0.2s ease;
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
          font: inherit;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .checkoutReload:hover,
        .checkoutClose:hover {
          color: #111827;
          border-color: #e8521a;
          transform: translateY(-1px);
        }

        .checkoutBody {
          position: relative;
          flex: 1;
          min-height: 0;
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 82, 26, 0.08), transparent 32%),
            #fff;
        }

        .checkoutFrame {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          border: 0;
          background: #fff;
        }

        .checkoutFrameHidden {
          opacity: 0;
          pointer-events: none;
        }

        .checkoutLoading,
        .checkoutFallback {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 10px;
          padding: 28px;
          text-align: center;
          color: #111827;
          background:
            radial-gradient(circle at 50% 35%, rgba(232, 82, 26, 0.08), transparent 30%),
            #fff;
        }

        .checkoutLoading strong,
        .checkoutFallback strong {
          font-size: 18px;
          line-height: 1.25;
        }

        .checkoutLoading small,
        .checkoutFallback p {
          max-width: 360px;
          margin: 0;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.55;
        }

        .checkoutSpinner {
          width: 42px;
          height: 42px;
          border: 4px solid #ffedd5;
          border-top-color: #e8521a;
          border-radius: 999px;
          animation: checkoutSpin 0.85s linear infinite;
        }

        .checkoutFallback button {
          margin-top: 6px;
          border: 1px solid #e8521a;
          border-radius: 999px;
          padding: 12px 16px;
          color: #fff;
          background: #e8521a;
          font: inherit;
          font-weight: 900;
          cursor: pointer;
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

        @keyframes checkoutSpin {
          to {
            transform: rotate(360deg);
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

          .checkoutHeader {
            min-height: 58px;
            padding: 10px 10px 10px 14px;
          }

          .checkoutHeader strong {
            font-size: 13px;
          }

          .checkoutHeader span,
          .checkoutReload {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .checkoutBackdrop,
          .checkoutPanel {
            animation: none;
          }

          .checkoutClose,
          .checkoutReload {
            transition: none;
          }

          .checkoutSpinner {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
