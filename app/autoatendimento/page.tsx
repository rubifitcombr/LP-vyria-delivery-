"use client";

import Image from "next/image";
import Link from "next/link";

const ORANGE = "#E8521A";
const DARK = "#161616";
const WHATSAPP_LINK =
  "https://wa.me/5562994856542?text=Ol%C3%A1!%20Quero%20conhecer%20o%20autoatendimento%20da%20Vyria.";

const benefits = [
  "Cliente escaneia o QR Code na mesa",
  "Pedido chega no painel em tempo real",
  "Garçom, caixa e cozinha acompanham tudo",
  "Menos fila, menos erro e mais giro de mesa"
] as const;

const painPoints = [
  {
    title: "Mesas esperando atendimento",
    text: "Clientes querem pedir, mas precisam esperar alguém aparecer."
  },
  {
    title: "Garçons sobrecarregados",
    text: "Nos horários de pico, sua equipe corre para dar conta do salão."
  },
  {
    title: "Pedidos anotados errados",
    text: "Trocas, retrabalho e clientes insatisfeitos."
  },
  {
    title: "Menos consumo por cliente",
    text: "Quanto mais demora para pedir, menos o cliente consome."
  }
] as const;

const steps = [
  {
    number: "01",
    icon: "QR",
    title: "QR Code",
    text: "O cliente escaneia o código da mesa e acessa o cardápio."
  },
  {
    number: "02",
    icon: "APP",
    title: "Pedido",
    text: "Ele escolhe os itens pelo celular e envia sem chamar o garçom."
  },
  {
    number: "03",
    icon: "KDS",
    title: "Cozinha",
    text: "O pedido chega organizado para preparo e acompanhamento."
  },
  {
    number: "04",
    icon: "OK",
    title: "Entrega",
    text: "Sua equipe entrega, fecha a mesa e mantém tudo no controle."
  }
] as const;

const features = [
  "QR Code por mesa",
  "Pedidos em tempo real",
  "Integração com cozinha",
  "Impressão automática",
  "Garçom acompanha tudo"
] as const;

const beforeItems = [
  "Espera",
  "Erro",
  "Papel",
  "Fila",
  "Menos vendas"
] as const;

const afterItems = [
  "Pedido imediato",
  "Fluxo digital",
  "Mais consumo",
  "Mais velocidade",
  "Mais faturamento"
] as const;

export default function AutoatendimentoPage() {
  return (
    <main className="autoPage">
      <header className="hero">
        <nav className="container nav">
          <Link href="/" className="brand" aria-label="Voltar para Vyria Delivery">
            <span className="brandMark">
              <Image src="/logo.png" alt="Vyria Delivery" width={38} height={38} className="brandLogo" priority />
            </span>
            <span>
              <strong>Vyria</strong>
              <small>Autoatendimento</small>
            </span>
          </Link>
          <a className="navCta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Ver demonstração
          </a>
        </nav>

        <section className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Autoatendimento por QR Code</p>
            <h1>Suas mesas podem pedir sozinhas.</h1>
            <p className="heroLead">
              Clientes escaneiam o QR Code, fazem pedidos pelo celular e os pedidos chegam direto na cozinha. Menos
              correria, menos erros e mais vendas.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Solicitar demonstração
              </a>
              <a className="btn btnSecondary" href="#como-funciona">
                Ver funcionamento
              </a>
            </div>
            <ul className="benefitList" aria-label="Principais benefícios">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="heroVisual" aria-label="Celular no balcão de um restaurante mostrando o painel Vyria">
            <Image
              src="/autoatendimento-hero-final.png"
              alt="Celular no balcão de restaurante mostrando o painel de mesas Vyria"
              width={593}
              height={422}
              className="heroRestaurantImage"
              unoptimized
              priority
            />
          </div>
        </section>
      </header>

      <section className="section painSection">
        <div className="container sectionHead">
          <p className="eyebrow">Gargalos do salão</p>
          <h2>Seu salão está vendendo menos do que poderia.</h2>
        </div>

        <div className="container painGrid">
          {painPoints.map((point) => (
            <article key={point.title} className="painCard">
              <span className="painIcon" aria-hidden="true" />
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="section flowSection">
        <div className="container sectionHead">
          <p className="eyebrow">Como funciona</p>
          <h2>QR Code → Pedido → Cozinha → Entrega</h2>
        </div>

        <div className="container flowContent">
          <div className="shortFrame">
            <iframe
              src="https://www.youtube.com/embed/_td7LHSvJXQ"
              title="Demonstração do autoatendimento Vyria"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="stepGrid">
            {steps.map((step) => (
              <article key={step.number} className="stepCard">
                <span className="stepIcon" aria-hidden="true">
                  {step.icon}
                </span>
                <small>{step.number}</small>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Operação mais leve</p>
            <h2>Mais pedidos, menos correria</h2>
            <p>O pedido nasce na mesa, chega em tempo real e sua equipe acompanha tudo até a entrega.</p>
          </div>
          <div className="featureGrid">
            {features.map((feature) => (
              <div key={feature} className="featurePill">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section resultsSection">
        <div className="container sectionHead">
          <p className="eyebrow">Antes x Depois</p>
          <h2>Com a Vyria, o salão deixa de depender da correria.</h2>
        </div>

        <div className="container comparisonGrid">
          <article className="comparisonCard comparisonBefore">
            <h2>Sem Vyria</h2>
            <ul className="comparisonList">
              {beforeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="comparisonCard comparisonAfter">
            <h2>Com Vyria</h2>
            <ul className="comparisonList">
              {afterItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="finalCta">
        <div className="container finalBox">
          <p className="eyebrow">CTA final</p>
          <h2>Pare de perder vendas por falta de atendimento.</h2>
          <div className="finalActions">
            <a className="btn btnPrimary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Solicitar demonstração
            </a>
            <a className="btn btnLight" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Falar com consultor
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .autoPage {
          color: #111;
          background: #fff;
          overflow: hidden;
        }
        .container {
          width: min(1120px, 92vw);
          margin: 0 auto;
        }
        .hero {
          min-height: 760px;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 72% 18%, rgba(232, 82, 26, 0.34), transparent 30%),
            linear-gradient(140deg, #101010 0%, ${DARK} 56%, #24140e 100%);
          background-size:
            58px 58px,
            58px 58px,
            auto,
            auto;
        }
        .nav {
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #fff;
        }
        .brandMark {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: ${ORANGE};
          font-weight: 800;
        }
        .brand strong,
        .brand small {
          display: block;
          line-height: 1.05;
        }
        .brand small {
          margin-top: 3px;
          color: #cfcfcf;
          font-size: 12px;
        }
        .navCta {
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          padding: 10px 15px;
          color: #fff;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.06);
        }
        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.9fr);
          gap: 54px;
          align-items: center;
          padding: 72px 0 96px;
        }
        .eyebrow {
          margin: 0 0 12px;
          color: ${ORANGE};
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero h1,
        .section h2,
        .finalCta h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .heroLead {
          max-width: 620px;
          margin: 20px 0 0;
          color: #dedede;
          font-size: 19px;
          line-height: 1.65;
        }
        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          padding: 14px 18px;
          font-weight: 800;
          transition: 0.2s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.04);
        }
        .btnPrimary {
          background: ${ORANGE};
          color: #fff;
          box-shadow: 0 16px 34px rgba(232, 82, 26, 0.3);
        }
        .btnSecondary {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: rgba(255, 255, 255, 0.06);
        }
        .btnLight {
          color: #111;
          border: 1px solid #e3ddd6;
          background: #fff;
        }
        .benefitList {
          display: grid;
          gap: 10px;
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
          color: #f4f4f4;
        }
        .benefitList li {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .benefitList li::before {
          content: "✓";
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: inline-grid;
          place-items: center;
          flex: 0 0 22px;
          background: rgba(232, 82, 26, 0.18);
          color: ${ORANGE};
          font-weight: 900;
        }
        .heroVisual {
          position: relative;
          display: grid;
          align-items: center;
        }
        :global(.heroRestaurantImage) {
          width: min(100%, 593px);
          height: auto;
          display: block;
          margin-left: auto;
          border-radius: 34px;
          object-fit: cover;
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.42);
        }
        .section {
          padding: 112px 0;
        }
        .painSection {
          background:
            radial-gradient(circle at 82% 8%, rgba(232, 82, 26, 0.07), transparent 28%),
            #fbfaf8;
        }
        .sectionHead {
          max-width: 760px;
          text-align: center;
        }
        .section h2,
        .finalCta h2 {
          color: #111;
          font-size: clamp(32px, 4vw, 52px);
        }
        .sectionHead p:not(.eyebrow),
        .splitGrid p,
        .finalBox p:not(.eyebrow) {
          color: #555;
          font-size: 17px;
          line-height: 1.7;
        }
        .painGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 34px;
          margin-top: 54px;
        }
        .painCard {
          position: relative;
          padding-left: 24px;
        }
        .painIcon {
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(180, 35, 24, 0.56);
          box-shadow: 0 0 0 8px rgba(180, 35, 24, 0.08);
          animation: painPulse 1.8s ease-out infinite;
        }
        .painCard h3 {
          margin: 0 0 12px;
          font-size: 23px;
          line-height: 1.12;
        }
        .painCard p {
          margin: 0;
          color: #5f5f5f;
          line-height: 1.65;
        }
        @keyframes painPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(180, 35, 24, 0.32);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(180, 35, 24, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(180, 35, 24, 0);
          }
        }
        .stepGrid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 54px;
        }
        .flowSection {
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 82, 26, 0.08), transparent 30%),
            #fff;
        }
        .flowSection .sectionHead {
          max-width: 900px;
        }
        .flowSection .sectionHead h2 {
          text-wrap: balance;
        }
        .flowContent {
          display: grid;
          grid-template-columns: minmax(240px, 0.42fr) minmax(0, 1fr);
          gap: 28px;
          align-items: stretch;
          margin-top: 54px;
        }
        .shortFrame {
          position: relative;
          min-height: 520px;
          border: 1px solid #eee1d8;
          border-radius: 34px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 28px 70px rgba(16, 16, 16, 0.08);
        }
        .shortFrame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .flowSection .stepGrid {
          gap: 0;
          padding: 28px;
          border: 1px solid #eee1d8;
          border-radius: 34px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 250, 246, 0.92)),
            #fff;
          box-shadow: 0 28px 70px rgba(16, 16, 16, 0.08);
          overflow: hidden;
          margin-top: 0;
        }
        .stepGrid::before {
          content: "";
          position: absolute;
          top: 50px;
          left: 8%;
          right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232, 82, 26, 0.38), transparent);
        }
        .flowSection .stepGrid::before {
          top: 72px;
          left: 12%;
          right: 12%;
          background: linear-gradient(90deg, transparent, rgba(232, 82, 26, 0.2), rgba(232, 82, 26, 0.48), rgba(232, 82, 26, 0.2), transparent);
        }
        .stepCard {
          position: relative;
          z-index: 1;
          border: 1px solid #ece7e2;
          border-radius: 28px;
          padding: 26px 22px;
          background: #fff;
          box-shadow: 0 18px 44px rgba(16, 16, 16, 0.07);
        }
        .flowSection .stepCard {
          border: 0;
          border-radius: 0;
          padding: 20px 18px 16px;
          background: transparent;
          box-shadow: none;
          text-align: center;
        }
        .flowSection .stepCard + .stepCard {
          border-left: 1px solid rgba(232, 82, 26, 0.1);
        }
        .stepIcon {
          width: 56px;
          height: 56px;
          border: 1px solid rgba(232, 82, 26, 0.22);
          border-radius: 18px;
          display: inline-grid;
          place-items: center;
          color: ${ORANGE};
          background: #fff7f2;
          font-size: 13px;
          font-weight: 900;
        }
        .flowSection .stepIcon {
          width: 68px;
          height: 68px;
          margin: 0 auto;
          border-color: rgba(232, 82, 26, 0.28);
          border-radius: 22px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.78), transparent 28%),
            linear-gradient(135deg, #fff4ee, #ffe5d8);
          box-shadow: 0 14px 34px rgba(232, 82, 26, 0.16);
        }
        .stepCard small {
          display: block;
          margin-top: 18px;
          color: ${ORANGE};
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }
        .flowSection .stepCard small {
          margin-top: 20px;
        }
        .stepCard h3 {
          margin: 8px 0 8px;
          font-size: 24px;
        }
        .flowSection .stepCard h3 {
          font-size: 22px;
        }
        .stepCard p {
          margin: 0;
          color: #5f5f5f;
          line-height: 1.65;
        }
        .resultsSection {
          background:
            radial-gradient(circle at 78% 20%, rgba(232, 82, 26, 0.12), transparent 26%),
            #f8f5f1;
        }
        .comparisonGrid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 30px;
          align-items: center;
          margin-top: 54px;
        }
        .comparisonCard {
          position: relative;
          padding: 34px;
          border-radius: 32px;
        }
        .comparisonBefore {
          padding-left: 0;
          color: rgba(17, 17, 17, 0.58);
        }
        .comparisonAfter {
          border: 1px solid rgba(18, 183, 106, 0.18);
          background:
            radial-gradient(circle at 90% 8%, rgba(18, 183, 106, 0.14), transparent 28%),
            #fff;
          box-shadow: 0 28px 70px rgba(16, 16, 16, 0.12);
        }
        .comparisonCard h2 {
          margin: 0 0 18px;
          font-size: clamp(28px, 3vw, 42px);
        }
        .comparisonBefore h2 {
          color: rgba(17, 17, 17, 0.54);
        }
        .comparisonAfter h2 {
          color: #111;
        }
        .comparisonList {
          display: grid;
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
          color: #2b2b2b;
          font-size: 18px;
          font-weight: 800;
        }
        .comparisonBefore .comparisonList {
          color: rgba(17, 17, 17, 0.48);
        }
        .comparisonList li {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .comparisonBefore .comparisonList li::before,
        .comparisonAfter .comparisonList li::before {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-grid;
          place-items: center;
          flex: 0 0 24px;
          font-weight: 900;
        }
        .comparisonBefore .comparisonList li::before {
          content: "×";
          color: rgba(180, 35, 24, 0.56);
          background: transparent;
        }
        .comparisonAfter .comparisonList li::before {
          content: "✓";
          color: #fff;
          background: #12b76a;
          box-shadow: 0 8px 18px rgba(18, 183, 106, 0.28);
        }
        .sectionDark {
          background:
            radial-gradient(circle at 18% 20%, rgba(232, 82, 26, 0.26), transparent 28%),
            linear-gradient(140deg, #101010, ${DARK} 62%, #24140e);
          color: #fff;
        }
        .sectionDark h2 {
          color: #fff;
        }
        .sectionDark .splitGrid p {
          color: #cfcfcf;
        }
        .splitGrid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
          gap: 42px;
          align-items: center;
        }
        .featureGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        .featurePill {
          display: flex;
          align-items: center;
          border: 0;
          border-radius: 0;
          padding: 0;
          background: transparent;
          color: #f7f7f7;
          font-size: 18px;
          font-weight: 800;
        }
        .featurePill::before {
          content: "✓";
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-grid;
          place-items: center;
          margin-right: 12px;
          background: rgba(18, 183, 106, 0.16);
          color: #32d583;
          font-size: 13px;
          font-weight: 900;
        }
        .finalCta {
          padding: 112px 0;
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 82, 26, 0.12), transparent 32%),
            #f8f5f1;
        }
        .finalBox {
          display: grid;
          justify-items: center;
          gap: 18px;
          max-width: 820px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 44px;
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 82, 26, 0.26), transparent 34%),
            linear-gradient(140deg, #101010, ${DARK} 68%, #24140e);
          box-shadow: 0 30px 80px rgba(16, 16, 16, 0.22);
        }
        .finalBox h2 {
          color: #fff;
        }
        .finalBox .eyebrow {
          color: #ff7a45;
        }
        .finalBox .btnPrimary {
          box-shadow: 0 18px 42px rgba(232, 82, 26, 0.42);
        }
        .finalBox p:not(.eyebrow) {
          max-width: 680px;
          margin: 0;
        }
        .finalActions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        @media (max-width: 920px) {
          .heroGrid,
          .splitGrid,
          .stepGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }
          .painGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .heroGrid {
            padding-top: 34px;
          }
          .heroVisual {
            min-height: auto;
          }
          .flowContent {
            grid-template-columns: 1fr;
          }
          .shortFrame {
            width: min(360px, 100%);
            min-height: auto;
            aspect-ratio: 9 / 16;
            margin: 0 auto;
            border-radius: 28px;
          }
        }
        @media (max-width: 620px) {
          .hero {
            min-height: auto;
          }
          .nav {
            align-items: flex-start;
            flex-direction: column;
            padding: 18px 0;
          }
          .hero h1 {
            font-size: 42px;
          }
          .heroLead {
            font-size: 16px;
          }
          .heroGrid {
            gap: 36px;
            padding-bottom: 64px;
          }
          .section {
            padding: 58px 0;
          }
          .section h2,
          .finalCta h2 {
            font-size: 31px;
            line-height: 1.05;
          }
          .sectionHead {
            text-align: left;
          }
          .sectionHead p:not(.eyebrow),
          .splitGrid p,
          .finalBox p:not(.eyebrow) {
            font-size: 16px;
            line-height: 1.6;
          }
          .heroVisual {
            min-height: auto;
          }
          :global(.heroRestaurantImage) {
            border-radius: 24px;
          }
          .painGrid,
          .stepGrid,
          .comparisonGrid {
            gap: 12px;
            margin-top: 24px;
          }
          .flowSection .stepGrid {
            gap: 0;
            padding: 10px 18px;
            border-radius: 24px;
          }
          .flowContent {
            gap: 18px;
            margin-top: 28px;
          }
          .shortFrame {
            width: min(280px, 82vw);
            border-radius: 24px;
          }
          .flowSection .stepGrid::before {
            top: 42px;
            bottom: 42px;
            left: 52px;
            right: auto;
            width: 1px;
            height: auto;
            background: linear-gradient(180deg, transparent, rgba(232, 82, 26, 0.42), transparent);
          }
          .flowSection .stepCard {
            display: grid;
            grid-template-columns: 54px 1fr;
            column-gap: 14px;
            align-items: start;
            padding: 18px 0;
            text-align: left;
          }
          .flowSection .stepCard + .stepCard {
            border-left: 0;
            border-top: 1px solid rgba(232, 82, 26, 0.1);
          }
          .flowSection .stepIcon {
            width: 54px;
            height: 54px;
            margin: 0;
            border-radius: 18px;
          }
          .flowSection .stepCard small,
          .flowSection .stepCard h3,
          .flowSection .stepCard p {
            grid-column: 2;
          }
          .flowSection .stepCard small {
            margin-top: 0;
          }
          .painGrid {
            grid-template-columns: 1fr;
          }
          .stepCard,
          .comparisonCard {
            min-height: auto;
            border-radius: 16px;
            padding: 18px;
            box-shadow: 0 12px 28px rgba(16, 16, 16, 0.08);
          }
          .painIcon {
            top: 7px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
          .painCard h3,
          .stepCard h3 {
            font-size: 20px;
            line-height: 1.18;
          }
          .painCard p,
          .stepCard p {
            font-size: 15px;
            line-height: 1.55;
          }
          .comparisonCard h2 {
            margin-bottom: 14px;
            font-size: 28px;
          }
          .comparisonList {
            gap: 10px;
            font-size: 16px;
          }
          .comparisonBefore .comparisonList li::before,
          .comparisonAfter .comparisonList li::before {
            width: 21px;
            height: 21px;
            flex-basis: 21px;
            font-size: 14px;
          }
          .featureGrid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .featurePill {
            border-radius: 14px;
            padding: 13px 14px;
            font-size: 15px;
          }
          .finalCta {
            padding: 62px 0;
          }
          .finalActions {
            width: 100%;
          }
          .finalActions .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
