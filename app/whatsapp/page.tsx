"use client";

import Image from "next/image";
import Link from "next/link";

const ORANGE = "#E8521A";
const DARK = "#161616";
const GREEN = "#12B76A";
const WHATSAPP_LINK =
  "https://wa.me/5562994856542?text=Ol%C3%A1!%20Quero%20conhecer%20o%20rob%C3%B4%20de%20WhatsApp%20da%20Vyria.";

const benefits = [
  "Resposta instantânea",
  "Cliente vai direto para o cardápio",
  "Menos mensagens repetitivas",
  "Mais pedidos organizados"
] as const;

const painPoints = [
  {
    title: "Mensagens acumulam",
    text: "Durante os horários de pico, novas conversas chegam antes da equipe conseguir responder."
  },
  {
    title: "Clientes esperam resposta",
    text: "O cliente quer pedir, mas fica parado esperando o link do cardápio ou uma orientação."
  },
  {
    title: "Equipe para o que está fazendo",
    text: "Quem deveria preparar e entregar pedidos precisa voltar para o WhatsApp o tempo todo."
  },
  {
    title: "Pedidos se misturam com dúvidas",
    text: "Conversas, confirmações e perguntas ficam no mesmo lugar, dificultando a organização."
  }
] as const;

const steps = [
  {
    number: "01",
    icon: "MSG",
    title: "Cliente envia mensagem",
    text: "O atendimento começa assim que o cliente chama seu restaurante no WhatsApp."
  },
  {
    number: "02",
    icon: "VYR",
    title: "Vyria responde",
    text: "A resposta automática orienta o cliente sem depender de atendimento manual."
  },
  {
    number: "03",
    icon: "LINK",
    title: "Cliente recebe o link",
    text: "A Vyria envia o caminho certo para o cardápio digital do restaurante."
  },
  {
    number: "04",
    icon: "MENU",
    title: "Abre o cardápio",
    text: "O cliente escolhe os itens sem esperar alguém enviar PDF ou responder manualmente."
  },
  {
    number: "05",
    icon: "PED",
    title: "Faz o pedido sozinho",
    text: "O pedido acontece no fluxo digital, com menos troca de mensagens."
  },
  {
    number: "06",
    icon: "OK",
    title: "Pedido organizado",
    text: "As informações entram organizadas no sistema para sua equipe produzir."
  }
] as const;

const operationBefore = [
  "Cliente",
  "WhatsApp",
  "Atendente",
  "Cardápio PDF",
  "Confirmação",
  "Pedido"
] as const;

const operationAfter = [
  "Cliente",
  "WhatsApp",
  "Resposta automática",
  "Cardápio Vyria",
  "Pedido"
] as const;

const beforeItems = [
  "Cliente esperando",
  "Cardápio enviado manualmente",
  "Equipe presa no WhatsApp",
  "Conversas misturadas",
  "Menos produtividade"
] as const;

const afterItems = [
  "Resposta automática",
  "Cardápio enviado instantaneamente",
  "Pedido organizado",
  "Equipe focada na produção",
  "Atendimento mais rápido"
] as const;

const repetitiveTasks = [
  "Qual o cardápio?",
  "Vocês entregam?",
  "Qual o horário?",
  "Como faço um pedido?"
] as const;

const testimonials = [
  {
    name: "Gabriel Assalin",
    business: "Hamburgueria",
    date: "19 Fevereiro 2026",
    selfie: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "O WhatsApp ficou muito mais organizado. O cliente recebe o cardápio rápido e a equipe não precisa parar tudo para responder."
  },
  {
    name: "Rayssa Karine",
    business: "Confeitaria",
    date: "10 Fevereiro 2026",
    selfie: "https://randomuser.me/api/portraits/women/31.jpg",
    text: "Antes eu perdia tempo mandando o mesmo link várias vezes. Agora a Vyria faz isso automaticamente e os pedidos chegam melhor."
  },
  {
    name: "Tiago Simoes",
    business: "Marmitaria",
    date: "14 Fevereiro 2026",
    selfie: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Nos horários de almoço ajudou muito. O cliente chama, recebe o cardápio e já segue para fazer o pedido."
  }
] as const;

const faqs = [
  {
    question: "A Vyria responde o cliente automaticamente no WhatsApp?",
    answer: "Sim. Quando o cliente chama, a automação envia uma resposta inicial com o link do cardápio para ele fazer o pedido."
  },
  {
    question: "Preciso deixar alguém online o tempo todo?",
    answer: "Não para o primeiro atendimento. A Vyria direciona o cliente para o cardápio e reduz as mensagens repetitivas da equipe."
  },
  {
    question: "O pedido entra organizado no sistema?",
    answer: "Sim. O objetivo é tirar o pedido da conversa solta do WhatsApp e levar o cliente para um fluxo digital mais organizado."
  },
  {
    question: "Funciona fora do horário de atendimento?",
    answer: "A resposta automática pode orientar o cliente mesmo quando sua equipe está ocupada ou fora do atendimento manual."
  }
] as const;

export default function WhatsAppPage() {
  return (
    <main className="whatsPage">
      <header className="hero">
        <nav className="container nav">
          <Link href="/" className="brand" aria-label="Voltar para Vyria Delivery">
            <span className="brandMark">
              <Image src="/logo.png" alt="Vyria Delivery" width={38} height={38} className="brandLogo" priority />
            </span>
            <span>
              <strong>Vyria</strong>
              <small>Robô de WhatsApp</small>
            </span>
          </Link>
          <a className="navCta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Ver demonstração
          </a>
        </nav>

        <section className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Atendimento automático no WhatsApp</p>
            <h1>Seu WhatsApp pode vender enquanto sua equipe trabalha.</h1>
            <p className="heroLead">
              Quando um cliente chama seu restaurante, a Vyria responde automaticamente e envia o link do cardápio para
              que ele faça o pedido sem esperar atendimento.
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

          <div className="heroVisual" aria-label="Prévia de conversa automatizada no WhatsApp">
            <div className="chatPhone">
              <div className="phoneTop" />
              <div className="chatHeader">
                <span className="avatar" aria-hidden="true">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=96&q=80"
                    alt=""
                    loading="lazy"
                  />
                </span>
                <div>
                  <strong>Pizzaria Elshaday</strong>
                  <small>online agora</small>
                </div>
              </div>
              <div className="chatBody">
                <p className="bubble customer">Oi, queria fazer um pedido.</p>
                <p className="bubble bot linkBubble">
                  Olá 👋 Seja bem-vindo(a)!
                  <br />
                  <br />
                  Para fazer seu pedido, acesse nosso cardápio online:
                  <br />
                  <br />
                  <span className="chatLink">🔗 vyria.delivery/restaurante</span>
                  <br />
                  <br />
                  Lá você pode escolher os produtos, informar o endereço e finalizar o pedido em poucos minutos.
                </p>
                <p className="bubble customer customerSuccess">Vou pedir por lá 👍</p>
              </div>
              <div className="chatInput">Digite uma mensagem</div>
            </div>
          </div>
        </section>
      </header>

      <section className="section painSection">
        <div className="container sectionHead">
          <p className="eyebrow">Dor</p>
          <h2>Seu WhatsApp virou um gargalo?</h2>
          <p>Durante os horários de pico:</p>
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
          <p className="eyebrow">Solução</p>
          <h2>A Vyria responde automaticamente e direciona o cliente para o pedido.</h2>
        </div>

        <div className="container flowContent">
          <div className="shortFrame">
            <iframe
              src="https://www.youtube.com/embed/1dOoUZAeU00"
              title="Demonstração do robô de WhatsApp Vyria"
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
            <p className="eyebrow">O que muda na operação</p>
            <h2>O caminho do pedido fica mais curto.</h2>
            <p>
              Antes, sua equipe precisava interromper a operação para enviar cardápio, confirmar informações e organizar
              pedidos. Com a Vyria, o cliente vai direto para o cardápio e o pedido chega mais organizado.
            </p>
          </div>
          <div className="operationGrid">
            <div className="operationFlow operationBefore">
              <h3>Antes</h3>
              {operationBefore.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="operationFlow operationAfter">
              <h3>Depois</h3>
              {operationAfter.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section repetitiveSection">
        <div className="container repetitiveGrid">
          <div className="repetitiveCopy">
            <p className="eyebrow">Equipe mais produtiva</p>
            <h2>Sua equipe deveria estar preparando pedidos, não copiando respostas.</h2>
            <h3>A Vyria assume o primeiro atendimento e leva o cliente direto para o cardápio.</h3>
            <p>
              As mesmas perguntas chegam todos os dias e interrompem a operação. Com a resposta automática, o cliente
              recebe orientação imediata e sua equipe continua focada em produzir, embalar e entregar.
            </p>
          </div>
          <div className="repeatPanel">
            <div className="repeatPanelTop">
              <span>Mensagens repetidas</span>
              <strong>Automatizadas</strong>
            </div>
            <div className="taskList" aria-label="Perguntas repetitivas respondidas automaticamente">
              {repetitiveTasks.map((task) => (
                <span key={task}>{task}</span>
              ))}
            </div>
            <div className="automationNote">
              <span>Resposta imediata</span>
              <strong>Cliente direcionado para o cardápio Vyria</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section resultsSection">
        <div className="container sectionHead">
          <p className="eyebrow">Antes x Depois</p>
          <h2>Com a Vyria, o primeiro atendimento deixa de travar sua operação.</h2>
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
          <h2>Quem usa a Vyria deixa o WhatsApp mais rápido e organizado.</h2>
        </div>

        <div className="container reviewTrustBar">
          <div className="reviewTrustInfo">
            <span className="reviewGoogleBadge" aria-label="Google">
              <span className="gBlue">G</span>
              <span className="gRed">o</span>
              <span className="gYellow">o</span>
              <span className="gBlue">g</span>
              <span className="gGreen">l</span>
              <span className="gRed">e</span>
            </span>
            <strong>Excelente</strong>
            <span className="reviewStars">★★★★★</span>
            <small>5.0 | 433 avaliações</small>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="reviewWriteBtn">
            Ver demonstração
          </a>
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
            <h2>Perguntas frequentes sobre o robô de WhatsApp.</h2>
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
          <h2>Quantos clientes estão esperando o link do seu cardápio agora?</h2>
          <p>Automatize o primeiro atendimento e transforme mensagens em pedidos organizados.</p>
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
        .whatsPage {
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
            radial-gradient(circle at 74% 18%, rgba(18, 183, 106, 0.28), transparent 30%),
            radial-gradient(circle at 20% 72%, rgba(232, 82, 26, 0.18), transparent 26%),
            linear-gradient(140deg, #101010 0%, ${DARK} 58%, #102018 100%);
          background-size:
            58px 58px,
            58px 58px,
            auto,
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
          background: rgba(18, 183, 106, 0.18);
          color: #32d583;
          font-weight: 900;
        }
        .heroVisual {
          position: relative;
          display: grid;
          justify-items: end;
          align-items: center;
          min-height: 560px;
        }
        .chatPhone {
          width: min(360px, 100%);
          min-height: 600px;
          border: 10px solid #080808;
          border-radius: 38px;
          background:
            radial-gradient(circle at 18% 12%, rgba(18, 183, 106, 0.12), transparent 22%),
            #efe7dc;
          overflow: hidden;
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.42);
        }
        .phoneTop {
          width: 36%;
          height: 18px;
          margin: 10px auto 4px;
          border-radius: 999px;
          background: #080808;
        }
        .chatHeader {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 18px;
          background: #075e54;
          color: #fff;
        }
        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 2px solid rgba(255, 255, 255, 0.36);
          background: #fff;
          overflow: hidden;
        }
        .avatar :global(img) {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .chatHeader strong,
        .chatHeader small {
          display: block;
          line-height: 1.15;
        }
        .chatHeader small {
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 12px;
        }
        .chatBody {
          display: grid;
          gap: 12px;
          padding: 22px 16px;
        }
        .bubble {
          max-width: 86%;
          margin: 0;
          border-radius: 18px;
          padding: 12px 14px;
          color: #111;
          font-size: 14px;
          line-height: 1.45;
          box-shadow: 0 8px 20px rgba(16, 16, 16, 0.08);
        }
        .customer {
          justify-self: end;
          border-bottom-right-radius: 5px;
          background: #dcf8c6;
        }
        .bot {
          justify-self: start;
          border-bottom-left-radius: 5px;
          background: #fff;
        }
        .linkBubble {
          max-width: 92%;
          font-size: 13px;
          line-height: 1.5;
        }
        .chatLink {
          display: inline-block;
          color: #027a48;
          font-weight: 800;
        }
        .customerSuccess {
          border: 1px solid rgba(18, 183, 106, 0.16);
          background: #ecfdf3;
        }
        .chatInput {
          margin: 18px 14px;
          border-radius: 999px;
          padding: 13px 16px;
          color: #777;
          background: #fff;
          font-size: 13px;
        }
        .section {
          padding: 112px 0;
        }
        .painSection {
          position: relative;
          background:
            linear-gradient(90deg, rgba(232, 82, 26, 0.05) 1px, transparent 1px),
            linear-gradient(180deg, rgba(232, 82, 26, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 82% 8%, rgba(232, 82, 26, 0.18), transparent 30%),
            radial-gradient(circle at 14% 78%, rgba(180, 35, 24, 0.1), transparent 28%),
            linear-gradient(180deg, #fff7f1 0%, #fbfaf8 58%, #fff 100%);
          background-size:
            56px 56px,
            56px 56px,
            auto,
            auto,
            auto;
          overflow: hidden;
        }
        .painSection::before {
          content: "";
          position: absolute;
          top: 42px;
          right: -120px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          border: 1px solid rgba(232, 82, 26, 0.16);
          background: rgba(255, 255, 255, 0.34);
        }
        .painSection::after {
          content: "";
          position: absolute;
          left: -80px;
          bottom: 52px;
          width: 210px;
          height: 210px;
          border-radius: 44px;
          background: rgba(232, 82, 26, 0.08);
          transform: rotate(12deg);
        }
        .painSection .sectionHead,
        .painSection .painGrid,
        .flowSection .sectionHead,
        .flowSection .flowContent,
        .flowSection .stepGrid {
          position: relative;
          z-index: 1;
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
          gap: 34px;
          margin-top: 54px;
        }
        .painCard {
          position: relative;
          border: 1px solid rgba(232, 82, 26, 0.12);
          border-radius: 24px;
          padding: 24px 20px 24px 42px;
          background: rgba(255, 255, 255, 0.74);
          box-shadow: 0 18px 48px rgba(80, 35, 18, 0.06);
          backdrop-filter: blur(10px);
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
          position: relative;
          background:
            linear-gradient(90deg, rgba(18, 183, 106, 0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(18, 183, 106, 0.04) 1px, transparent 1px),
            radial-gradient(circle at 50% 0%, rgba(18, 183, 106, 0.18), transparent 32%),
            radial-gradient(circle at 90% 70%, rgba(232, 82, 26, 0.08), transparent 28%),
            linear-gradient(180deg, #f4fff8 0%, #ffffff 72%);
          background-size:
            62px 62px,
            62px 62px,
            auto,
            auto,
            auto;
          overflow: hidden;
        }
        .flowSection::before {
          content: "";
          position: absolute;
          top: 84px;
          left: -110px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(18, 183, 106, 0.1);
          filter: blur(2px);
        }
        .flowSection::after {
          content: "";
          position: absolute;
          right: -90px;
          bottom: 72px;
          width: 220px;
          height: 220px;
          border-radius: 52px;
          border: 1px solid rgba(18, 183, 106, 0.18);
          transform: rotate(-10deg);
        }
        .flowContent {
          display: grid;
          grid-template-columns: minmax(240px, 0.38fr) minmax(0, 1fr);
          gap: 28px;
          align-items: stretch;
          margin-top: 54px;
        }
        .shortFrame {
          position: relative;
          min-height: 560px;
          border: 1px solid rgba(18, 183, 106, 0.16);
          border-radius: 34px;
          overflow: hidden;
          background: #101010;
          box-shadow: 0 32px 80px rgba(16, 16, 16, 0.12);
        }
        .shortFrame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .stepGrid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 0;
          padding: 28px;
          border: 1px solid rgba(18, 183, 106, 0.16);
          border-radius: 34px;
          background:
            radial-gradient(circle at 20% 0%, rgba(18, 183, 106, 0.1), transparent 30%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 255, 250, 0.96)),
            #fff;
          box-shadow: 0 32px 80px rgba(16, 16, 16, 0.1);
          overflow: hidden;
        }
        .stepGrid::before {
          content: "";
          position: absolute;
          top: 72px;
          left: 12%;
          right: 12%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(18, 183, 106, 0.2), rgba(18, 183, 106, 0.48), rgba(18, 183, 106, 0.2), transparent);
        }
        .stepCard {
          position: relative;
          z-index: 1;
          padding: 20px 18px 16px;
          text-align: center;
        }
        .stepCard + .stepCard {
          border-left: 1px solid rgba(18, 183, 106, 0.1);
        }
        .stepIcon {
          width: 68px;
          height: 68px;
          margin: 0 auto;
          border: 1px solid rgba(18, 183, 106, 0.28);
          border-radius: 22px;
          display: inline-grid;
          place-items: center;
          color: #067647;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.78), transparent 28%),
            linear-gradient(135deg, #ecfdf3, #d1fadf);
          box-shadow: 0 14px 34px rgba(18, 183, 106, 0.16);
          font-size: 13px;
          font-weight: 900;
        }
        .stepCard small {
          display: block;
          margin-top: 20px;
          color: ${GREEN};
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
            radial-gradient(circle at 18% 20%, rgba(18, 183, 106, 0.22), transparent 28%),
            linear-gradient(140deg, #101010, ${DARK} 62%, #102018);
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
        .operationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .operationFlow {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 26px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.06);
        }
        .operationFlow h3 {
          margin: 0 0 18px;
          font-size: 24px;
        }
        .operationFlow span {
          position: relative;
          display: block;
          padding: 10px 0 24px;
          color: #f7f7f7;
          font-size: 16px;
          font-weight: 800;
        }
        .operationFlow span:not(:last-child)::after {
          content: "↓";
          position: absolute;
          left: 0;
          bottom: 0;
          color: rgba(255, 255, 255, 0.46);
          font-weight: 900;
        }
        .operationAfter {
          border-color: rgba(18, 183, 106, 0.24);
          background: rgba(18, 183, 106, 0.08);
        }
        .operationAfter h3 {
          color: #32d583;
        }
        .repetitiveGrid h2 {
          margin: 0;
          color: #111;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .repetitiveGrid p {
          color: #555;
          font-size: 17px;
          line-height: 1.7;
        }
        .repetitiveSection {
          background:
            radial-gradient(circle at 82% 14%, rgba(18, 183, 106, 0.14), transparent 28%),
            radial-gradient(circle at 12% 80%, rgba(232, 82, 26, 0.08), transparent 30%),
            #fbfaf8;
        }
        .repetitiveGrid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.05fr);
          gap: 52px;
          align-items: center;
        }
        .repetitiveCopy {
          position: relative;
          z-index: 0;
        }
        .repetitiveCopy::before {
          content: "";
          position: absolute;
          top: -22px;
          left: -24px;
          width: 72px;
          height: 72px;
          border-radius: 24px;
          background: rgba(232, 82, 26, 0.1);
          transform: rotate(-8deg);
          z-index: -1;
        }
        .repetitiveGrid h3 {
          margin: 12px 0 0;
          color: ${ORANGE};
          font-size: clamp(26px, 3vw, 40px);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .repeatPanel {
          position: relative;
          border: 1px solid rgba(18, 183, 106, 0.18);
          border-radius: 34px;
          padding: 28px;
          background:
            radial-gradient(circle at 92% 8%, rgba(18, 183, 106, 0.16), transparent 28%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 255, 250, 0.96));
          box-shadow: 0 28px 70px rgba(16, 16, 16, 0.1);
          overflow: hidden;
        }
        .repeatPanel::before {
          content: "";
          position: absolute;
          inset: 16px;
          border: 1px dashed rgba(18, 183, 106, 0.18);
          border-radius: 26px;
          pointer-events: none;
        }
        .repeatPanelTop {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 20px;
        }
        .repeatPanelTop span {
          color: #667085;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .repeatPanelTop strong {
          border-radius: 999px;
          padding: 8px 11px;
          color: #067647;
          background: #dcfae6;
          font-size: 12px;
          font-weight: 900;
        }
        .taskList {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .taskList span {
          position: relative;
          border: 1px solid #e3eee7;
          border-radius: 20px;
          padding: 18px 18px 18px 46px;
          background: #fff;
          color: #111;
          font-size: 17px;
          font-weight: 900;
          box-shadow: 0 18px 44px rgba(16, 16, 16, 0.06);
        }
        .taskList span::before {
          content: "?";
          position: absolute;
          top: 17px;
          left: 16px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-grid;
          place-items: center;
          color: ${ORANGE};
          background: #fff4ee;
          font-size: 12px;
          font-weight: 900;
        }
        .automationNote {
          position: relative;
          display: grid;
          gap: 4px;
          margin-top: 18px;
          border-radius: 22px;
          padding: 18px;
          background:
            radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.5), transparent 28%),
            linear-gradient(135deg, #067647, #12b76a);
          color: #fff;
        }
        .automationNote span {
          color: rgba(255, 255, 255, 0.76);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .automationNote strong {
          font-size: 18px;
          line-height: 1.25;
        }
        .resultsSection {
          background:
            radial-gradient(circle at 78% 20%, rgba(18, 183, 106, 0.12), transparent 26%),
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
        }
        .comparisonAfter .comparisonList li::before {
          content: "✓";
          color: #fff;
          background: ${GREEN};
          box-shadow: 0 8px 18px rgba(18, 183, 106, 0.28);
        }
        .proofSection {
          background:
            radial-gradient(circle at 82% 12%, rgba(18, 183, 106, 0.1), transparent 28%),
            #fff;
        }
        .reviewTrustBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 34px;
          border: 1px solid #ececec;
          border-radius: 18px;
          padding: 12px 14px;
          background: #fff;
          box-shadow: 0 16px 38px rgba(16, 16, 16, 0.05);
        }
        .reviewTrustInfo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .reviewGoogleBadge {
          display: inline-flex;
          align-items: center;
          gap: 0.5px;
          border: 1px solid #e6e6e6;
          border-radius: 999px;
          padding: 5px 10px;
          background: #fff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .gBlue {
          color: #4285f4;
        }
        .gRed {
          color: #ea4335;
        }
        .gYellow {
          color: #fbbc05;
        }
        .gGreen {
          color: #34a853;
        }
        .reviewTrustInfo strong {
          color: #1f1f1f;
          font-size: 15px;
        }
        .reviewStars,
        .testimonialStars {
          color: #ffb400;
          font-weight: 800;
          letter-spacing: 0.08em;
        }
        .reviewTrustInfo small {
          color: #5f6368;
          font-size: 13px;
        }
        .reviewWriteBtn {
          border: 1px solid #e1e1e1;
          border-radius: 10px;
          padding: 9px 12px;
          background: #fff;
          color: #202124;
          font-size: 13px;
          font-weight: 800;
        }
        .testimonialGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 18px;
        }
        .testimonialCard {
          border: 1px solid #e3eee7;
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
          font-size: 13px;
        }
        .testimonialQuote {
          margin: 0;
          color: #454545;
          font-size: 15px;
          line-height: 1.6;
        }
        .faqSection {
          background:
            radial-gradient(circle at 16% 12%, rgba(18, 183, 106, 0.1), transparent 30%),
            #f4fff8;
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
          border: 1px solid #e3eee7;
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
            radial-gradient(circle at 50% 0%, rgba(18, 183, 106, 0.12), transparent 32%),
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
            radial-gradient(circle at 50% 0%, rgba(18, 183, 106, 0.22), transparent 34%),
            linear-gradient(140deg, #101010, ${DARK} 68%, #102018);
          box-shadow: 0 30px 80px rgba(16, 16, 16, 0.22);
        }
        .finalBox h2 {
          color: #fff;
        }
        .finalBox .eyebrow {
          color: #32d583;
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
          .operationGrid,
          .flowContent,
          .stepGrid,
          .testimonialGrid,
          .faqGrid,
          .repetitiveGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }
          .heroGrid {
            padding-top: 34px;
          }
          .heroVisual {
            justify-items: center;
          }
          .shortFrame {
            width: min(360px, 100%);
            min-height: auto;
            aspect-ratio: 9 / 16;
            margin: 0 auto;
            border-radius: 28px;
          }
          .stepGrid::before {
            top: 42px;
            bottom: 42px;
            left: 52px;
            right: auto;
            width: 1px;
            height: auto;
            background: linear-gradient(180deg, transparent, rgba(18, 183, 106, 0.42), transparent);
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
            border-top: 1px solid rgba(18, 183, 106, 0.1);
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
          .repetitiveGrid p,
          .finalBox p:not(.eyebrow) {
            font-size: 16px;
            line-height: 1.6;
          }
          .heroVisual {
            min-height: auto;
          }
          .chatPhone {
            width: min(320px, 94vw);
            min-height: auto;
          }
          .painGrid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 24px;
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
          .stepGrid,
          .repetitiveGrid,
          .comparisonGrid {
            gap: 12px;
            margin-top: 24px;
          }
          .flowContent {
            gap: 18px;
            margin-top: 28px;
          }
          .shortFrame {
            width: min(280px, 82vw);
            border-radius: 24px;
          }
          .stepGrid {
            padding: 10px 18px;
            border-radius: 24px;
          }
          .comparisonCard {
            min-height: auto;
            border-radius: 16px;
            padding: 18px;
            box-shadow: 0 12px 28px rgba(16, 16, 16, 0.08);
          }
          .taskList {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .repeatPanel {
            border-radius: 22px;
            padding: 20px;
          }
          .repeatPanel::before {
            inset: 10px;
            border-radius: 18px;
          }
          .repeatPanelTop {
            align-items: flex-start;
            flex-direction: column;
          }
          .taskList span {
            border-radius: 14px;
            padding: 14px 14px 14px 42px;
            font-size: 16px;
          }
          .taskList span::before {
            top: 14px;
            left: 14px;
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
          .operationGrid {
            gap: 10px;
          }
          .reviewTrustBar {
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonialGrid {
            gap: 12px;
          }
          .faqGrid {
            gap: 18px;
          }
          .faqItem {
            border-radius: 14px;
            padding: 16px;
          }
          .faqItem summary {
            font-size: 16px;
          }
          .operationFlow {
            padding: 18px;
          }
          .operationFlow span {
            font-size: 15px;
          }
          .finalCta {
            padding: 62px 0;
          }
          .finalBox {
            padding: 28px 20px;
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
