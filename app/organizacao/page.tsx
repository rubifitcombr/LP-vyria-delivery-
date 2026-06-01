"use client";

import Image from "next/image";

const ORANGE = "#E8521A";
const DARK = "#161616";
const GREEN = "#12B76A";
const WHATSAPP_LINK =
  "https://wa.me/5562994856542?text=Ol%C3%A1!%20Quero%20conhecer%20a%20gest%C3%A3o%20de%20pedidos%20e%20KDS%20da%20Vyria.";

const benefits = [
  "Menos pedidos atrasados",
  "Menos erros na produção",
  "Mais velocidade nos horários de pico",
  "Mais controle da operação"
] as const;

const painPoints = [
  {
    title: "Pedidos espalhados",
    text: "WhatsApp, balcão, salão e delivery viram uma fila confusa quando tudo chega ao mesmo tempo."
  },
  {
    title: "Cozinha sem prioridade",
    text: "A equipe prepara no improviso, sem clareza do que chegou antes ou do que está atrasando."
  },
  {
    title: "Erros de comunicação",
    text: "Pedido anotado errado, item esquecido e retrabalho aparecem quando a operação depende de papel."
  },
  {
    title: "Cliente esperando mais",
    text: "Quando o pedido trava na cozinha, o atraso aparece no atendimento, na entrega e no caixa."
  }
] as const;

const steps = [
  {
    number: "01",
    icon: "PED",
    title: "Pedido entra",
    text: "O pedido chega no sistema com itens, observações e origem organizados."
  },
  {
    number: "02",
    icon: "KDS",
    title: "KDS organiza",
    text: "A cozinha visualiza a fila de preparo e acompanha cada pedido por status."
  },
  {
    number: "03",
    icon: "FOGO",
    title: "Cozinha prepara",
    text: "Cada etapa fica clara para reduzir dúvida, atraso e retrabalho."
  },
  {
    number: "04",
    icon: "CAIXA",
    title: "Caixa acompanha",
    text: "O fechamento sabe quando o pedido avançou e o que está pronto."
  },
  {
    number: "05",
    icon: "OK",
    title: "Entrega finaliza",
    text: "Atendimento e entrega sabem quando o pedido está pronto para finalizar."
  }
] as const;

const systemSlides = [
  {
    title: "Pedidos",
    text: "Pedidos entram e avançam por status, com valores e ações claras para a equipe.",
    image: "/organizacao-pedidos.png",
    alt: "Tela de pedidos da Vyria com pedidos organizados por status"
  },
  {
    title: "KDS",
    text: "A cozinha acompanha a fila de preparo e marca os pedidos conforme avançam.",
    image: "/organizacao-kds.png",
    alt: "Tela KDS da Vyria com pedidos em preparação e prontos"
  },
  {
    title: "Caixa",
    text: "O fechamento acompanha comandas, recebimentos e faturamento do turno.",
    image: "/organizacao-caixa.png",
    alt: "Tela de caixa da Vyria com resumo financeiro e comandas abertas"
  }
] as const;

const features = [
  "Atendimento sabe o status",
  "Cozinha sabe a prioridade",
  "Caixa acompanha a conclusão",
  "Gestão identifica gargalos",
  "Entrega trabalha com menos atraso"
] as const;

const beforeItems = [
  "Pedido no papel",
  "Equipe perguntando tudo",
  "Cozinha sem fila clara",
  "Item esquecido",
  "Atraso no atendimento"
] as const;

const afterItems = [
  "Pedido digital",
  "Fila organizada",
  "Status em tempo real",
  "Menos erro",
  "Mais velocidade"
] as const;

const testimonials = [
  {
    name: "Alan Barbosa",
    business: "Pizzaria",
    date: "20 Fevereiro 2026",
    selfie: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Antes perdíamos tempo procurando pedidos. Hoje a cozinha já sabe exatamente o que fazer quando o pedido entra."
  },
  {
    name: "Ana Paula Andrade",
    business: "Restaurante",
    date: "25 Fevereiro 2026",
    selfie: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Reduzimos atrasos nos horários de pico porque a fila ficou visível para toda a equipe."
  },
  {
    name: "Tiago Simoes",
    business: "Marmitaria",
    date: "14 Fevereiro 2026",
    selfie: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "O pedido entra, passa pela produção e chega até a entrega sem ficar perdido em papel ou conversa."
  }
] as const;

const faqs = [
  {
    question: "O que é KDS?",
    answer:
      "KDS é o painel digital da cozinha. Ele mostra os pedidos em tempo real para a equipe preparar e acompanhar cada etapa."
  },
  {
    question: "A Vyria substitui as comandas de papel?",
    answer:
      "Sim. Os pedidos entram de forma digital e organizada, reduzindo papel, erro de leitura e retrabalho na cozinha."
  },
  {
    question: "Dá para acompanhar o status do pedido?",
    answer:
      "Sim. A operação consegue acompanhar o pedido em etapas, como recebido, em preparo e pronto para entrega."
  },
  {
    question: "Serve para delivery e salão?",
    answer:
      "Sim. A gestão de pedidos ajuda a organizar pedidos de diferentes origens, como WhatsApp, balcão, delivery e mesas."
  }
] as const;

export default function OrganizacaoPage() {
  return (
    <main className="orgPage">
      <header className="hero">
        <nav className="container nav">
          <a href="/" className="brand" aria-label="Voltar para Vyria Delivery">
            <span className="brandMark">
              <Image src="/logo.png" alt="Vyria Delivery" width={38} height={38} className="brandLogo" priority />
            </span>
            <span>
              <strong>Vyria</strong>
              <small>Gestão de pedidos</small>
            </span>
          </a>
          <a className="navCta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Ver demonstração
          </a>
        </nav>

        <section className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Gestão de pedidos, KDS e cozinha</p>
            <h1>Sua cozinha não precisa depender de gritos, papéis e confusão.</h1>
            <p className="heroLead">
              A Vyria organiza pedidos em tempo real, mostra o que está em preparo e ajuda sua equipe a entregar com
              menos erro, menos atraso e mais controle.
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

          <div className="heroVisual" aria-label="Painel KDS com pedidos da cozinha">
            <div className="kdsPanel">
              <div className="kdsTop">
                <div>
                  <span>KDS Vyria</span>
                  <strong>Cozinha</strong>
                </div>
                <small>12 pedidos ativos</small>
              </div>
              <div className="kdsColumns">
                <section>
                  <h3>Recebidos</h3>
                  <article className="ticket">
                    <strong>#1248</strong>
                    <span>Mesa 04</span>
                    <p>2 Smash Burger<br />1 Batata grande</p>
                  </article>
                  <article className="ticket">
                    <strong>#1249</strong>
                    <span>Delivery</span>
                    <p>1 Pizza calabresa<br />Sem cebola</p>
                  </article>
                </section>
                <section>
                  <h3>Em preparo</h3>
                  <article className="ticket ticketActive">
                    <strong>#1246</strong>
                    <span>WhatsApp</span>
                    <p>3 Marmitas executivas<br />Separar talheres</p>
                  </article>
                </section>
                <section>
                  <h3>Prontos</h3>
                  <article className="ticket ticketDone">
                    <strong>#1245</strong>
                    <span>Balcão</span>
                    <p>1 Combo duplo<br />Retirada</p>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="section painSection">
        <div className="container sectionHead">
          <p className="eyebrow">Gargalos da cozinha</p>
          <h2>Quando a cozinha perde o controle, o restaurante inteiro atrasa.</h2>
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
          <h2>Pedido → KDS → Cozinha → Caixa → Entrega</h2>
        </div>

        <div className="container solutionShowcase">
          <div className="screenshotSlider" aria-label="Demonstração das telas de pedidos, KDS e caixa">
            <div className="slideViewport">
              <div className="slideTrack">
                {systemSlides.map((slide) => (
                  <article key={slide.title} className="systemSlide">
                    <div className="slideImageWrap">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        width={1024}
                        height={768}
                        className="systemImage"
                        unoptimized
                      />
                    </div>
                    <div className="slideCaption">
                      <strong>{slide.title}</strong>
                      <p>{slide.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="slideDots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
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
            <p className="eyebrow">Operação alinhada</p>
            <h2>Atendimento, cozinha e caixa trabalhando na mesma informação.</h2>
            <p>
              Enquanto um pedido avança, toda a equipe acompanha automaticamente o status em tempo real.
            </p>
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
          <h2>Com a Vyria, o pedido não se perde no caminho até a cozinha.</h2>
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

      <section className="section proofSection">
        <div className="container sectionHead">
          <p className="eyebrow">Depoimentos</p>
          <h2>Quem organiza a cozinha com a Vyria ganha velocidade no preparo.</h2>
        </div>

        <div className="container testimonialGrid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonialCard">
              <header className="testimonialHeader">
                <div className="reviewAvatar">
                  <img src={item.selfie} alt={`Foto de ${item.name}`} loading="lazy" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <small>{item.date}</small>
                  <p>{item.business}</p>
                </div>
              </header>
              <span className="testimonialStars">★★★★★</span>
              <p className="testimonialQuote">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faqSection">
        <div className="container faqGrid">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Perguntas frequentes sobre gestão de pedidos e KDS.</h2>
          </div>
          <div className="faqList">
            {faqs.map((faq) => (
              <details key={faq.question} className="faqItem">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container finalBox">
          <p className="eyebrow">CTA final</p>
          <h2>Seu próximo gargalo não será vender mais. Será conseguir produzir mais.</h2>
          <p>Veja como a Vyria organiza pedidos, cozinha e operação em tempo real.</p>
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
        .orgPage {
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
            radial-gradient(circle at 74% 18%, rgba(232, 82, 26, 0.28), transparent 30%),
            radial-gradient(circle at 22% 74%, rgba(18, 183, 106, 0.16), transparent 28%),
            linear-gradient(140deg, #101010 0%, ${DARK} 58%, #24140e 100%);
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
          background: #fff;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.24);
        }
        :global(.brandLogo) {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          grid-template-columns: minmax(0, 1fr) minmax(420px, 1fr);
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
          background: rgba(18, 183, 106, 0.18);
          color: #32d583;
          font-weight: 900;
        }
        .heroVisual {
          display: grid;
          justify-items: end;
        }
        .kdsPanel {
          width: min(100%, 620px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 34px;
          padding: 22px;
          background:
            radial-gradient(circle at 86% 0%, rgba(232, 82, 26, 0.16), transparent 26%),
            rgba(255, 255, 255, 0.08);
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(14px);
        }
        .kdsTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }
        .kdsTop span,
        .kdsTop strong,
        .kdsTop small {
          display: block;
        }
        .kdsTop span {
          color: ${ORANGE};
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .kdsTop strong {
          margin-top: 4px;
          font-size: 28px;
        }
        .kdsTop small {
          border-radius: 999px;
          padding: 8px 11px;
          color: #32d583;
          background: rgba(18, 183, 106, 0.14);
          font-weight: 900;
        }
        .kdsColumns {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .kdsColumns section {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 22px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.08);
        }
        .kdsColumns h3 {
          margin: 0 0 12px;
          color: #f7f7f7;
          font-size: 15px;
        }
        .ticket {
          display: grid;
          gap: 7px;
          margin-top: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.94);
          color: #111;
        }
        .ticket strong {
          color: ${ORANGE};
          font-size: 18px;
        }
        .ticket span {
          color: #667085;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
        }
        .ticket p {
          margin: 0;
          color: #333;
          font-size: 14px;
          line-height: 1.45;
        }
        .ticketActive {
          box-shadow: 0 18px 42px rgba(232, 82, 26, 0.18);
        }
        .ticketDone strong {
          color: ${GREEN};
        }
        .section {
          padding: 112px 0;
        }
        .painSection {
          background:
            radial-gradient(circle at 82% 8%, rgba(232, 82, 26, 0.12), transparent 28%),
            #fbfaf8;
        }
        .sectionHead {
          max-width: 820px;
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
          gap: 28px;
          margin-top: 54px;
        }
        .painCard {
          position: relative;
          border: 1px solid rgba(232, 82, 26, 0.12);
          border-radius: 24px;
          padding: 24px 20px 24px 42px;
          background: rgba(255, 255, 255, 0.76);
          box-shadow: 0 18px 48px rgba(80, 35, 18, 0.06);
        }
        .painIcon {
          position: absolute;
          top: 31px;
          left: 20px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(180, 35, 24, 0.56);
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
        .flowSection {
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 82, 26, 0.08), transparent 30%),
            #fff;
        }
        .solutionShowcase {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 28px;
          margin-top: 54px;
        }
        .screenshotSlider {
          border: 1px solid #eee1d8;
          border-radius: 34px;
          padding: 18px;
          background:
            radial-gradient(circle at 84% 0%, rgba(232, 82, 26, 0.09), transparent 30%),
            #fff;
          box-shadow: 0 28px 70px rgba(16, 16, 16, 0.08);
          overflow: hidden;
        }
        .slideViewport {
          overflow: hidden;
          border-radius: 24px;
          background: #f8f5f1;
        }
        .slideTrack {
          display: flex;
          width: 300%;
          animation: orgSlide 15s ease-in-out infinite;
        }
        .systemSlide {
          width: 33.3333%;
          flex: 0 0 33.3333%;
          background: #fff;
        }
        .slideImageWrap {
          display: grid;
          place-items: center;
          aspect-ratio: 16 / 9;
          background: #f4f4f5;
          overflow: hidden;
        }
        :global(.systemImage) {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: top center;
        }
        .slideCaption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 20px;
          border-top: 1px solid #eee1d8;
        }
        .slideCaption strong {
          color: ${ORANGE};
          font-size: 18px;
          font-weight: 900;
        }
        .slideCaption p {
          max-width: 680px;
          margin: 0;
          color: #555;
          line-height: 1.55;
        }
        .slideDots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
        }
        .slideDots span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(232, 82, 26, 0.28);
        }
        .slideDots span:first-child {
          animation: dotOne 15s ease-in-out infinite;
        }
        .slideDots span:nth-child(2) {
          animation: dotTwo 15s ease-in-out infinite;
        }
        .slideDots span:nth-child(3) {
          animation: dotThree 15s ease-in-out infinite;
        }
        @keyframes orgSlide {
          0%,
          26% {
            transform: translateX(0);
          }
          33%,
          59% {
            transform: translateX(-33.3333%);
          }
          66%,
          92% {
            transform: translateX(-66.6666%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes dotOne {
          0%,
          26%,
          100% {
            background: ${ORANGE};
          }
          33%,
          92% {
            background: rgba(232, 82, 26, 0.28);
          }
        }
        @keyframes dotTwo {
          0%,
          26%,
          66%,
          100% {
            background: rgba(232, 82, 26, 0.28);
          }
          33%,
          59% {
            background: ${ORANGE};
          }
        }
        @keyframes dotThree {
          0%,
          59%,
          100% {
            background: rgba(232, 82, 26, 0.28);
          }
          66%,
          92% {
            background: ${ORANGE};
          }
        }
        .stepGrid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          margin-top: 0;
          padding: 28px;
          border: 1px solid #eee1d8;
          border-radius: 34px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 250, 246, 0.92)),
            #fff;
          box-shadow: 0 28px 70px rgba(16, 16, 16, 0.08);
          overflow: hidden;
        }
        .stepGrid::before {
          content: "";
          position: absolute;
          top: 72px;
          left: 12%;
          right: 12%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232, 82, 26, 0.2), rgba(232, 82, 26, 0.48), rgba(232, 82, 26, 0.2), transparent);
        }
        .stepCard {
          position: relative;
          z-index: 1;
          padding: 20px 18px 16px;
          text-align: center;
        }
        .stepCard + .stepCard {
          border-left: 1px solid rgba(232, 82, 26, 0.1);
        }
        .stepIcon {
          width: 68px;
          height: 68px;
          margin: 0 auto;
          border: 1px solid rgba(232, 82, 26, 0.28);
          border-radius: 22px;
          display: inline-grid;
          place-items: center;
          color: ${ORANGE};
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.78), transparent 28%),
            linear-gradient(135deg, #fff4ee, #ffe5d8);
          box-shadow: 0 14px 34px rgba(232, 82, 26, 0.16);
          font-size: 13px;
          font-weight: 900;
        }
        .stepCard small {
          display: block;
          margin-top: 20px;
          color: ${ORANGE};
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }
        .stepCard h3 {
          margin: 8px 0 8px;
          font-size: 22px;
        }
        .stepCard p {
          margin: 0;
          color: #5f5f5f;
          line-height: 1.65;
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
        }
        .comparisonAfter .comparisonList li::before {
          content: "✓";
          color: #fff;
          background: ${GREEN};
          box-shadow: 0 8px 18px rgba(18, 183, 106, 0.28);
        }
        .proofSection {
          background: #fff;
        }
        .testimonialGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 34px;
        }
        .testimonialCard {
          border: 1px solid #ece7e2;
          border-radius: 22px;
          padding: 18px;
          background: #fff;
          box-shadow: 0 18px 44px rgba(16, 16, 16, 0.06);
        }
        .testimonialHeader {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
        }
        .reviewAvatar {
          width: 42px;
          height: 42px;
          border: 1px solid #ececec;
          border-radius: 50%;
          overflow: hidden;
          background: #f3f3f3;
        }
        .reviewAvatar :global(img) {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .testimonialHeader h3 {
          margin: 0 0 2px;
          font-size: 17px;
        }
        .testimonialHeader small {
          display: block;
          color: #7a7a7a;
          font-size: 12px;
        }
        .testimonialHeader p {
          margin: 2px 0 0;
          color: #4b4b4b;
          font-size: 13px;
        }
        .testimonialStars {
          display: inline-block;
          margin: 12px 0 8px;
          color: #ffb400;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }
        .testimonialQuote {
          margin: 0;
          color: #454545;
          font-size: 15px;
          line-height: 1.6;
        }
        .faqSection {
          background:
            radial-gradient(circle at 16% 12%, rgba(232, 82, 26, 0.08), transparent 30%),
            #fbfaf8;
        }
        .faqGrid {
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
          gap: 42px;
          align-items: start;
        }
        .faqGrid h2 {
          margin: 0;
          color: #111;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .faqList {
          display: grid;
          gap: 12px;
        }
        .faqItem {
          border: 1px solid #ece7e2;
          border-radius: 18px;
          padding: 18px 20px;
          background: #fff;
          box-shadow: 0 14px 34px rgba(16, 16, 16, 0.05);
        }
        .faqItem summary {
          cursor: pointer;
          color: #111;
          font-size: 18px;
          font-weight: 900;
        }
        .faqItem p {
          margin: 12px 0 0;
          color: #5f5f5f;
          line-height: 1.65;
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
        .finalBox p:not(.eyebrow) {
          max-width: 680px;
          margin: 0;
          color: #cfcfcf;
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
          .testimonialGrid,
          .faqGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }
          .heroVisual {
            justify-items: center;
          }
          .kdsColumns {
            grid-template-columns: 1fr;
          }
          .painGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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
            padding: 34px 0 64px;
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
          .kdsPanel {
            border-radius: 24px;
            padding: 16px;
          }
          .solutionShowcase {
            gap: 18px;
            margin-top: 28px;
          }
          .screenshotSlider {
            border-radius: 22px;
            padding: 10px;
          }
          .slideViewport {
            border-radius: 16px;
          }
          .slideImageWrap {
            aspect-ratio: 4 / 3;
          }
          .slideCaption {
            align-items: flex-start;
            flex-direction: column;
            gap: 6px;
            padding: 14px;
          }
          .slideCaption p {
            font-size: 14px;
            line-height: 1.45;
          }
          .painGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 24px;
          }
          .stepGrid {
            grid-template-columns: 1fr;
            gap: 0;
            margin-top: 28px;
            padding: 10px 18px;
            border-radius: 24px;
          }
          .stepGrid::before {
            top: 42px;
            bottom: 42px;
            left: 52px;
            right: auto;
            width: 1px;
            height: auto;
            background: linear-gradient(180deg, transparent, rgba(232, 82, 26, 0.42), transparent);
          }
          .stepCard {
            display: grid;
            grid-template-columns: 54px 1fr;
            column-gap: 14px;
            align-items: start;
            padding: 18px 0;
            text-align: left;
          }
          .stepCard + .stepCard {
            border-left: 0;
            border-top: 1px solid rgba(232, 82, 26, 0.1);
          }
          .stepIcon {
            width: 54px;
            height: 54px;
            margin: 0;
            border-radius: 18px;
          }
          .stepCard small,
          .stepCard h3,
          .stepCard p {
            grid-column: 2;
          }
          .stepCard small {
            margin-top: 0;
          }
          .painIcon {
            top: 23px;
            left: 18px;
            width: 8px;
            height: 8px;
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
          .comparisonCard,
          .testimonialCard {
            border-radius: 16px;
            padding: 18px;
            box-shadow: 0 12px 28px rgba(16, 16, 16, 0.08);
          }
          .featureGrid,
          .testimonialGrid,
          .faqGrid {
            gap: 12px;
          }
          .featurePill {
            font-size: 15px;
          }
          .faqItem {
            border-radius: 14px;
            padding: 16px;
          }
          .faqItem summary {
            font-size: 16px;
          }
          .finalCta {
            padding: 62px 0;
          }
          .finalBox {
            padding: 28px 20px;
          }
          .finalActions,
          .finalActions .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
