"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ORANGE = "#E8521A";
const PRIMARY = "#0284C7";
const PRIMARY_LIGHT = "#0EA5E9";
const DARK = "#111827";
const TEXT = "#1F2937";
const MUTED = "#6B7280";
const BORDER = "#E5E7EB";
const BG_SOFT = "#F8FAFC";
const WHATSAPP_LINK =
  "https://wa.me/5562994856542?text=Ol%C3%A1!%20Quero%20conhecer%20os%20planos%20e%20modelos%20de%20opera%C3%A7%C3%A3o%20da%20Vyria.";

type TipoOperacao = "delivery" | "presencial" | "hibrido";
type PlanoTier = "start" | "growth" | "pro";
type BillingCycle = "monthly" | "annual";

type PlanFeatureRow = {
  label: string;
  start: boolean;
  growth: boolean;
  pro: boolean;
};

const operationModels: {
  id: TipoOperacao;
  label: string;
  planLabel: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}[] = [
  {
    id: "delivery",
    label: "Delivery",
    planLabel: "Delivery",
    title: "DELIVERY",
    tagline: "Receba pedidos sem depender do WhatsApp para organizar sua operação.",
    description:
      "Ideal para hamburguerias, pizzarias, marmitarias e restaurantes que vendem por entrega ou retirada e precisam controlar pedidos, clientes e entregadores em um só lugar.",
    bullets: [
      "Cardápio digital com link próprio",
      "Pedidos organizados em tempo real",
      "Entregadores, promoções e automações no Growth"
    ]
  },
  {
    id: "presencial",
    label: "Mesa/Balcão",
    planLabel: "Presencial",
    title: "PRESENCIAL",
    tagline: "Mais agilidade no atendimento e menos erros dentro do salão.",
    description:
      "Feito para restaurantes, bares, cafeterias e operações de balcão que precisam controlar mesas, comandas, pagamentos e cozinha sem depender de papel ou anotações manuais.",
    bullets: [
      "PDV para balcão e atendimento presencial",
      "QR Code para pedidos nas mesas",
      "Caixa, KDS e operação completa no Pro"
    ]
  },
  {
    id: "hibrido",
    label: "Completo",
    planLabel: "Completo",
    title: "COMPLETO",
    tagline: "Delivery e atendimento presencial funcionando juntos, sem retrabalho.",
    description:
      "Para operações que vendem no salão, balcão e entrega ao mesmo tempo e precisam enxergar toda a operação em um único painel.",
    bullets: [
      "Pedidos presenciais e online no mesmo sistema",
      "Garçons, entregadores e clientes conectados",
      "Caixa, KDS, estoque e gestão completa no Pro"
    ]
  }
];

const planTiers: {
  id: PlanoTier;
  name: string;
  badge: string;
  description: string;
  highlight?: boolean;
}[] = [
  {
    id: "start",
    name: "Start",
    badge: "Iniciante",
    description: "Base para organizar produtos, métricas, relatórios essenciais e a operação inicial."
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Mais popular",
    description: "Para ganhar velocidade com pedidos em tempo real, promoções, automações, aparência personalizada e IA.",
    highlight: true
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Completo",
    description: "Operação profissional com caixa, KDS, impressão, PIX, IA completa e inventário."
  }
];

const planPrices: Record<TipoOperacao, Record<PlanoTier, number>> = {
  delivery: { start: 49.9, growth: 89.9, pro: 139.9 },
  presencial: { start: 49.9, growth: 89.9, pro: 139.9 },
  hibrido: { start: 69.9, growth: 109.9, pro: 149.9 }
};

const planFeaturesByOperation: Record<TipoOperacao, PlanFeatureRow[]> = {
  delivery: [
    { label: "Dashboard e métricas básicas", start: true, growth: true, pro: true },
    { label: "Produtos e cardápio online", start: true, growth: true, pro: true },
    { label: "Link público da loja", start: true, growth: true, pro: true },
    { label: "Relatórios essenciais", start: true, growth: true, pro: true },
    { label: "Configurações e assinatura", start: true, growth: true, pro: true },
    { label: "Pedidos em tempo real", start: false, growth: true, pro: true },
    { label: "Gestão de entregadores", start: false, growth: true, pro: true },
    { label: "Registro de corridas e acertos", start: false, growth: true, pro: true },
    { label: "Promoções e cupons", start: false, growth: true, pro: true },
    { label: "Aparência da loja online", start: false, growth: true, pro: true },
    { label: "Automações WhatsApp", start: false, growth: true, pro: true },
    { label: "IA: importação de cardápio por foto", start: false, growth: true, pro: true },
    { label: "IA: descrição de produtos", start: false, growth: true, pro: true },
    { label: "Caixa ligado ao fluxo online", start: false, growth: false, pro: true },
    { label: "KDS para cozinha", start: false, growth: false, pro: true },
    { label: "Impressão automática", start: false, growth: false, pro: true },
    { label: "Estoque por produto", start: false, growth: false, pro: true },
    { label: "Relatórios avançados", start: false, growth: false, pro: true },
    { label: "IA: imagem de produto", start: false, growth: false, pro: true },
    { label: "PIX no checkout público", start: false, growth: false, pro: true }
  ],
  presencial: [
    { label: "Dashboard e métricas básicas", start: true, growth: true, pro: true },
    { label: "Produtos e cardápio", start: true, growth: true, pro: true },
    { label: "PDV/balcão simples", start: true, growth: true, pro: true },
    { label: "Relatórios essenciais", start: true, growth: true, pro: true },
    { label: "Configurações e assinatura", start: true, growth: true, pro: true },
    { label: "Pedidos em tempo real da operação local", start: false, growth: true, pro: true },
    { label: "QR/autoatendimento de salão", start: false, growth: true, pro: true },
    { label: "Promoções e cupons", start: false, growth: true, pro: true },
    { label: "Aparência personalizada", start: false, growth: true, pro: true },
    { label: "Automações WhatsApp", start: false, growth: true, pro: true },
    { label: "IA: importação de cardápio por foto", start: false, growth: true, pro: true },
    { label: "IA: descrição de produtos", start: false, growth: true, pro: true },
    { label: "Garçom completo com mapa de mesas", start: false, growth: false, pro: true },
    { label: "Caixa completo", start: false, growth: false, pro: true },
    { label: "KDS para cozinha", start: false, growth: false, pro: true },
    { label: "Impressão automática", start: false, growth: false, pro: true },
    { label: "Estoque por produto", start: false, growth: false, pro: true },
    { label: "Relatórios avançados", start: false, growth: false, pro: true },
    { label: "IA: imagem de produto", start: false, growth: false, pro: true },
    { label: "PIX no checkout", start: false, growth: false, pro: true }
  ],
  hibrido: [
    { label: "Dashboard e métricas básicas", start: true, growth: true, pro: true },
    { label: "Produtos e cardápio", start: true, growth: true, pro: true },
    { label: "PDV/balcão", start: true, growth: true, pro: true },
    { label: "Link público e QR para entrega/retirada", start: true, growth: true, pro: true },
    { label: "Taxa e zona/raio de entrega", start: true, growth: true, pro: true },
    { label: "Relatórios essenciais", start: true, growth: true, pro: true },
    { label: "Configurações e assinatura", start: true, growth: true, pro: true },
    { label: "Pedidos em tempo real: balcão, salão e online", start: false, growth: true, pro: true },
    { label: "Gestão de entregadores", start: false, growth: true, pro: true },
    { label: "Garçom/QR salão", start: false, growth: true, pro: true },
    { label: "Promoções e cupons", start: false, growth: true, pro: true },
    { label: "Aparência da loja online", start: false, growth: true, pro: true },
    { label: "Automações WhatsApp", start: false, growth: true, pro: true },
    { label: "IA: importação de cardápio por foto", start: false, growth: true, pro: true },
    { label: "IA: descrição de produtos", start: false, growth: true, pro: true },
    { label: "Garçom completo com mapa de mesas", start: false, growth: false, pro: true },
    { label: "Caixa completo", start: false, growth: false, pro: true },
    { label: "KDS para cozinha", start: false, growth: false, pro: true },
    { label: "Impressão automática", start: false, growth: false, pro: true },
    { label: "Estoque por produto", start: false, growth: false, pro: true },
    { label: "Relatórios avançados", start: false, growth: false, pro: true },
    { label: "IA: imagem de produto", start: false, growth: false, pro: true },
    { label: "PIX no checkout", start: false, growth: false, pro: true },
    { label: "Fluxo online completo", start: false, growth: false, pro: true }
  ]
};

const planCardFeaturesByOperation: Record<TipoOperacao, Record<PlanoTier, string[]>> = {
  delivery: {
    start: [
      "Dashboard e métricas básicas",
      "Produtos e cardápio online",
      "Link público da loja para pedidos",
      "Histórico simples de pedidos",
      "Relatórios essenciais",
      "Configurações e assinatura"
    ],
    growth: [
      "Tudo do plano Start incluso",
      "Pedidos em tempo real para delivery e retirada",
      "Gestão de entregadores",
      "Registro de corridas e acertos",
      "Promoções e cupons",
      "Aparência da loja online",
      "Automações WhatsApp",
      "IA para importar cardápio e gerar descrições"
    ],
    pro: [
      "Tudo do plano Growth incluso",
      "Caixa ligado ao fluxo online",
      "KDS para cozinha",
      "Impressão automática",
      "Estoque por produto",
      "Relatórios avançados",
      "IA para imagem de produto",
      "PIX no checkout público"
    ]
  },
  presencial: {
    start: [
      "Dashboard e métricas básicas",
      "Produtos e cardápio",
      "PDV/balcão simples",
      "Relatórios essenciais",
      "Configurações da loja",
      "Assinatura e faturamento"
    ],
    growth: [
      "Tudo do plano Start incluso",
      "Pedidos em tempo real da operação local",
      "PDV para atendimento presencial",
      "QR/autoatendimento de salão",
      "Promoções e cupons",
      "Aparência personalizada",
      "Automações WhatsApp",
      "IA para importar cardápio e gerar descrições"
    ],
    pro: [
      "Tudo do plano Growth incluso",
      "Garçom completo com mapa de mesas",
      "Caixa completo",
      "KDS para cozinha",
      "Impressão automática",
      "Estoque por produto",
      "Relatórios avançados",
      "PIX no checkout"
    ]
  },
  hibrido: {
    start: [
      "Dashboard e métricas básicas",
      "Produtos e cardápio",
      "PDV/balcão",
      "Link público e QR para entrega/retirada",
      "Taxa e zona/raio de entrega",
      "Configurações e assinatura"
    ],
    growth: [
      "Tudo do plano Start incluso",
      "Pedidos em tempo real de balcão, salão e online",
      "Gestão de entregadores",
      "PDV e Garçom/QR salão",
      "Promoções e cupons",
      "Aparência da loja online",
      "Automações WhatsApp",
      "IA para importar cardápio e gerar descrições"
    ],
    pro: [
      "Tudo do plano Growth incluso",
      "Garçom completo com mapa de mesas",
      "PDV e caixa completo",
      "KDS e impressão automática",
      "Estoque por produto",
      "Relatórios avançados",
      "IA para imagem de produto",
      "PIX no checkout e entregadores completos"
    ]
  }
};

const deliveryPlanCards: Record<
  PlanoTier,
  {
    title: string;
    tagline: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaVariant: "outline" | "primary" | "premium";
  }
> = {
  start: {
    title: "Delivery Start",
    tagline: "Receba pedidos online sem depender do WhatsApp para organizar sua operação.",
    description:
      "Ideal para novos estabelecimentos e operações que precisam de um cardápio digital rápido e um controle financeiro sem dor de cabeça.",
    features: planCardFeaturesByOperation.delivery.start,
    ctaLabel: "Começar Agora",
    ctaVariant: "outline"
  },
  growth: {
    title: "Delivery Growth",
    tagline: "O plano para quem quer parar de apagar incêndios e começar a crescer.",
    description:
      "Receba pedidos em tempo real, automatize confirmações no WhatsApp, gerencie entregadores e aumente suas vendas com promoções e inteligência artificial.",
    features: planCardFeaturesByOperation.delivery.growth,
    ctaLabel: "Acelerar meu Negócio",
    ctaVariant: "primary"
  },
  pro: {
    title: "Delivery Pro",
    tagline: "Quando sua operação não pode errar.",
    description:
      "Controle cozinha, estoque, financeiro e pedidos em um único fluxo sincronizado.",
    features: planCardFeaturesByOperation.delivery.pro,
    ctaLabel: "Garantir Operação Profissional",
    ctaVariant: "premium"
  }
};

const includedInAllPlans = [
  {
    icon: "dashboard",
    title: "Dashboard com Visão Diária Completa",
    text: "O coração da sua operação na primeira tela. Acompanhe indicadores principais, faturamento e desempenho sem precisar gerar relatórios complexos."
  },
  {
    icon: "products",
    title: "Gestão de Produtos Inteligente",
    text: "Cadastre itens, adicione complementos, configure categorias e altere preços instantaneamente. Um gerenciamento flexível que se adapta à velocidade do seu cardápio."
  },
  {
    icon: "reports",
    title: "Relatórios Essenciais",
    text: "Decida o futuro do seu negócio com base em dados reais. Acompanhe o desempenho da operação e entenda melhor o crescimento do faturamento."
  },
  {
    icon: "menu",
    title: "Cardápio Digital Interativo",
    text: "Um link único e exclusivo da sua marca para receber pedidos direto no seu ecossistema, totalmente livre de comissões abusivas e integrado ao seu fluxo de produção."
  },
  {
    icon: "pdv",
    title: "Assinatura e Faturamento",
    text: "Tenha controle do plano, status da assinatura e vencimentos em um fluxo simples para manter sua operação ativa e previsível."
  },
  {
    icon: "support",
    title: "Suporte Humanizado e Ágil",
    text: "Esqueça as respostas automáticas de robôs travados. Nossa equipe de especialistas entende a urgência de um restaurante e está pronta para te ajudar de verdade quando você precisar."
  }
] as const;

const operationAccelerators = [
  { icon: "pix", title: "PIX direto na sua conta" },
  { icon: "menu", title: "Cardápio digital próprio" },
  { icon: "whatsapp", title: "Automações WhatsApp" },
  { icon: "kds", title: "KDS para cozinha" },
  { icon: "drivers", title: "Gestão de entregadores" },
  { icon: "ai", title: "IA para cardápio e produtos" }
] as const;

const faqs = [
  {
    question: "Posso alterar o meu plano a qualquer momento?",
    answer:
      "Sim. Você pode evoluir ou ajustar o plano conforme a operação cresce. Nossa equipe orienta a melhor migração para não interromper o atendimento."
  },
  {
    question: "O Vyria cobra comissão sobre os pedidos do meu delivery?",
    answer:
      "Não. Os pedidos feitos pelo seu cardápio digital não têm comissão da Vyria. O plano é mensal e você mantém o controle das suas vendas."
  },
  {
    question: "Preciso instalar algum software nos computadores do restaurante?",
    answer:
      "Na maioria dos casos, não. A Vyria funciona em nuvem pelo navegador. Recursos como impressão, TEF ou configurações locais podem precisar de ajustes específicos na operação."
  },
  {
    question: "Como funciona o treinamento da minha equipe após a contratação?",
    answer:
      "A implantação é assistida. A equipe Vyria ajuda na configuração inicial e orienta o uso dos principais fluxos para balcão, delivery, cozinha e gestão."
  }
] as const;

function formatPlanPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function getPlanPrice(value: number, billingCycle: BillingCycle) {
  return billingCycle === "annual" ? value * 0.8 : value;
}

function getHeroPlanContent(operation: TipoOperacao, tier: (typeof planTiers)[number]) {
  if (operation === "delivery") {
    return deliveryPlanCards[tier.id];
  }

  const operationLabel =
    operationModels.find((item) => item.id === operation)?.planLabel ?? "Vyria";

  return {
    title: `${operationLabel} ${tier.name}`,
    tagline: tier.badge,
    description: tier.description,
    features: planCardFeaturesByOperation[operation][tier.id],
    ctaLabel: "Começar agora",
    ctaVariant: tier.highlight ? "primary" : "outline"
  } as const;
}

function FeatureMark({ included }: { included: boolean }) {
  return (
    <span
      className={`featureMark ${included ? "featureMarkIncluded" : "featureMarkExcluded"}`}
      aria-label={included ? "Incluído" : "Não incluído"}
    >
      {included ? "✓" : "×"}
    </span>
  );
}

function AcceleratorIcon({ name }: { name: (typeof operationAccelerators)[number]["icon"] }) {
  if (name === "pix") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 7h10v10H7zM9.5 9.5h5M9.5 12h5M9.5 14.5h3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 4h10v16H7zM9.5 8h5M9.5 11h5M9.5 14h3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4a8 8 0 0 0-6.9 12.1L4 20l3.9-1A8 8 0 1 0 12 4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 10.2c.3.8 1.1 2.1 2.4 3 1.3.9 2.6 1.2 3.2 1.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "kds") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 6h14v11H5zM8 19h8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 10h3M8 13h5M14 10h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "drivers") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 7.5h9v8h-9zM13.5 10h3.2l2.8 3.1v2.4h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.2" cy="17" r="1.55" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.8" cy="17" r="1.55" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.2l5-.7L12 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IncludeIcon({ name }: { name: (typeof includedInAllPlans)[number]["icon"] }) {
  if (name === "dashboard") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v14H4zM8 15v-3m4 3V9m4 6v-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "products") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7h14M7 7l1 12h8l1-12M9 7a3 3 0 0 1 6 0M9.5 12h5M9.5 15h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "reports") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 19V5h8l4 4v10H6zM14 5v4h4M9 15l2-2 2 1 2.5-3M9 17h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v16H7zM9.5 8h5M9.5 11h5M9.5 14h3M16.5 17.5h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "pdv") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9h14v10H5zM8 9V5h8v4M8 13h3m-3 3h2m4-3h2m-2 3h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 13a6 6 0 0 1 12 0v3a3 3 0 0 1-3 3h-2M6 13v3h3v-4H6zm12 0v3h-3v-4h3z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OperationIcon({ type }: { type: TipoOperacao }) {
  if (type === "delivery") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 7.5h9v8h-9zM13.5 10h3.2l2.8 3.1v2.4h-6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
        <circle cx="7.2" cy="17" r="1.55" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="16.8" cy="17" r="1.55" fill="none" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    );
  }

  if (type === "presencial") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 10h14l-1.2-4.5H6.2L5 10zM6.5 10v8.5h11V10M9 18.5v-4h6v4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
        <path
          d="M7.4 10v1.2a1.7 1.7 0 0 0 3.4 0V10m0 0v1.2a1.7 1.7 0 0 0 3.4 0V10m0 0v1.2a1.7 1.7 0 0 0 3.4 0V10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 5.5v4.2M7 18.5v-3.2h4V12h2v3.3h4v3.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <rect x="9.3" y="3.8" width="5.4" height="3.4" rx="0.8" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <rect x="4.3" y="17" width="5.4" height="3.4" rx="0.8" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <rect x="14.3" y="17" width="5.4" height="3.4" rx="0.8" fill="none" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

export default function PlanosPage() {
  const [operation, setOperation] = useState<TipoOperacao>("delivery");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");
  const [isIncludeSliderPaused, setIncludeSliderPaused] = useState(false);
  const activeOperation = operationModels.find((item) => item.id === operation) ?? operationModels[0];

  return (
    <main className="plansPage">
      <section className="hero">
        <header className="topBar">
          <nav className="topBarInner container" aria-label="Navegação principal">
            <Link className="brand" href="/">
              <span className="brandMark">
                <Image src="/logo.png" alt="Vyria Delivery" width={38} height={38} className="brandLogo" />
              </span>
              <span className="brandText">
                <strong>Vyria Delivery</strong>
                <small>Planos e operação</small>
              </span>
            </Link>

            <div className="topLinks" aria-label="Seções da página">
              <a href="#comparativo">Comparativo</a>
              <a href="#modelo">Modelos</a>
              <Link href="/">Início</Link>
            </div>

            <a className="navCta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Pedir demonstração
            </a>
          </nav>
        </header>

        <div className="container heroContent">
          <p className="heroBadge">
            <span className="heroBadgeIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d="M7 3v7m-2-7v7m4-7v7M5 10h4v11H7V10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
                <path
                  d="M15.5 3v18M15.5 3c2.2 1.1 3.5 3.2 3.5 5.4 0 2.5-1.3 4.2-3.5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            Planos Vyria Delivery
          </p>
          <h1>
            Escolha o plano ideal <span>para o seu modelo de operação</span>
          </h1>
          <p className="heroLead">
            Sistema completo para delivery, salão, balcão e operações híbridas com cardápio
            digital, pedidos em tempo real, caixa, KDS e IA.
          </p>

          <div className="heroPanel" aria-label="Escolha o modelo de operação">
            {operationModels.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`operationButton ${operation === item.id ? "operationButtonActive" : ""}`}
                onClick={() => setOperation(item.id)}
                aria-pressed={operation === item.id}
              >
                <span className="operationIcon" aria-hidden="true">
                  <OperationIcon type={item.id} />
                </span>
                <strong>{item.label}</strong>
                <span>
                  {item.id === "delivery"
                    ? "Entrega / Retirada"
                    : item.id === "presencial"
                      ? "Atendimento Presencial"
                      : "Consumo Local e Entrega"}
                </span>
              </button>
            ))}
          </div>

          <div className="heroBilling" role="group" aria-label="Tipo de cobrança">
            <button
              type="button"
              className={`billingLabel ${billingCycle === "monthly" ? "billingLabelActive" : ""}`}
              onClick={() => setBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
            >
              Mensal
            </button>
            <button
              type="button"
              className={`billingSwitch ${billingCycle === "annual" ? "billingSwitchOn" : ""}`}
              onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")}
              aria-pressed={billingCycle === "annual"}
              aria-label={billingCycle === "annual" ? "Cobrança anual ativa" : "Cobrança mensal ativa"}
            >
              <span className="billingSwitchKnob" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`billingLabel ${billingCycle === "annual" ? "billingLabelActive" : ""}`}
              onClick={() => setBillingCycle("annual")}
              aria-pressed={billingCycle === "annual"}
            >
              Anual
            </button>
            <span className="billingDiscount">Economize até 20%</span>
          </div>

          <div className="heroPlanGrid">
            {planTiers.map((tier) => {
              const content = getHeroPlanContent(operation, tier);

              return (
                <article key={tier.id} className={`heroPlanCard ${tier.highlight ? "heroPlanCardPopular" : ""}`}>
                  {tier.highlight ? <span className="popularBadge">Mais popular</span> : null}
                  <h2>{content.title}</h2>
                  <p className="heroPlanTagline">{content.tagline}</p>
                  <p className="heroPlanDesc">{content.description}</p>
                  <p className="heroPrice">
                    <span>R$</span>
                    {formatPlanPrice(getPlanPrice(planPrices[operation][tier.id], billingCycle))}
                    <small>/mês</small>
                  </p>
                  <p className="contractNote">
                    {billingCycle === "annual"
                      ? "Contrato de 1 ano com 20% de desconto nas mensalidades."
                      : "Pagamento mensal, sem complicação."}
                  </p>
                  <ul className="heroFeatureList">
                    {content.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    className={`heroPlanLink heroPlanLink-${content.ctaVariant}`}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content.ctaLabel}
                  </a>
                </article>
              );
            })}
          </div>

          <div className="includeSliderBlock" aria-label="Todos os planos incluem">
            <div className="includeSliderHeader">
              <h2>
                Todos os planos <span>incluem</span>
              </h2>
              <p>Recursos essenciais para operar melhor desde o primeiro dia.</p>
            </div>

            <div
              className={`includeSlider ${isIncludeSliderPaused ? "includeSliderPaused" : ""}`}
              tabIndex={0}
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                setIncludeSliderPaused(true);
              }}
              onPointerUp={(event) => {
                event.currentTarget.releasePointerCapture(event.pointerId);
                setIncludeSliderPaused(false);
              }}
              onPointerCancel={() => setIncludeSliderPaused(false)}
            >
              <div className="includeSliderTrack">
                {[...includedInAllPlans, ...includedInAllPlans].map((item, index) => (
                  <article key={`${item.title}-${index}`} className="includeSlideCard">
                    <span className="includeSlideIcon" aria-hidden="true">
                      <IncludeIcon name={item.icon} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modelo" className="section operationSection">
        <div className="container operationGrid">
          <div className="operationCopy">
            <p className="eyebrow">Modelo selecionado</p>
            <h2>{activeOperation.title}</h2>
            <p className="operationTagline">{activeOperation.tagline}</p>
            <p>{activeOperation.description}</p>
          </div>
          <div className="operationBullets">
            {activeOperation.bullets.map((bullet) => (
              <span key={bullet}>
                <strong aria-hidden="true">✓</strong>
                {bullet}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="comparativo" className="section pricingSection">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Planos</p>
            <h2>Planos que crescem com a sua operação</h2>
            <p>Os valores mudam conforme o modelo de operação escolhido.</p>
          </div>

          <div className="operationTabs" role="tablist" aria-label="Tipo de operação">
            {operationModels.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`operationTab ${operation === item.id ? "operationTabActive" : ""}`}
                onClick={() => setOperation(item.id)}
                role="tab"
                aria-selected={operation === item.id}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="compareWrap">
            <div className="compareHead">
              <div>
                <h3>Comparativo de recursos</h3>
                <p>Veja o que cada plano inclui no modelo {activeOperation.label}.</p>
              </div>
              <span>{activeOperation.label}</span>
            </div>
            <table className="compareTable">
              <thead>
                <tr>
                  <th scope="col">Recursos</th>
                  {planTiers.map((tier) => (
                    <th key={tier.id} scope="col" className={tier.highlight ? "highlightCol" : ""}>
                      <strong>{tier.name}</strong>
                      <small>
                        R${formatPlanPrice(getPlanPrice(planPrices[operation][tier.id], billingCycle))}/mês
                      </small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planFeaturesByOperation[operation].map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>
                      <FeatureMark included={row.start} />
                    </td>
                    <td className="highlightCol">
                      <FeatureMark included={row.growth} />
                    </td>
                    <td>
                      <FeatureMark included={row.pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section acceleratorSection">
        <div className="container">
          <div className="sectionHeader">
            <h2>Recursos que aceleram sua operação</h2>
          </div>

          <div className="acceleratorGrid" aria-label="Recursos operacionais">
            {operationAccelerators.map((item) => (
              <article key={item.title} className="acceleratorCard">
                <span className="acceleratorIcon" aria-hidden="true">
                  <AcceleratorIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container faqContainer">
          <div className="sectionHeader">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2>Dúvidas comuns antes de contratar.</h2>
          </div>

          <div className="faqList">
            {faqs.map((item) => (
              <details key={item.question} className="faqItem">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container">
          <p className="eyebrow">Dúvida sobre qual escolher?</p>
          <h2>A gente te ajuda a escolher o plano certo para sua operação.</h2>
          <a className="btn btnPrimary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Pedir recomendação de plano
          </a>
        </div>
      </section>

      <style jsx>{`
        .plansPage {
          color: ${TEXT};
          background: #fff;
          overflow: hidden;
        }

        .container {
          width: min(1120px, 92vw);
          margin: 0 auto;
        }

        .hero {
          color: ${DARK};
          background: #fff;
          border-bottom: 1px solid ${BORDER};
        }

        .topBar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(255, 255, 255, 0.9);
          border-bottom: 1px solid ${BORDER};
          backdrop-filter: blur(14px);
        }

        .topBarInner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand,
        .heroActions,
        .heroBilling,
        .operationBullets {
          display: inline-flex;
          align-items: center;
        }

        .brand {
          gap: 10px;
          color: ${DARK};
          flex: 0 0 auto;
        }

        .brandMark {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: #fff;
          overflow: hidden;
          border: 1px solid ${BORDER};
        }

        .brandLogo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .brandText {
          display: grid;
          gap: 3px;
          min-width: 0;
        }

        .brandText strong,
        .brandText small {
          display: block;
          line-height: 1;
          white-space: nowrap;
        }

        .brandText strong {
          font-size: 17px;
          font-weight: 900;
        }

        .brandText small {
          color: ${MUTED};
          font-size: 12px;
        }

        .topLinks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          color: ${TEXT};
          font-size: 14px;
          font-weight: 700;
        }

        .topLinks a:hover {
          color: ${PRIMARY};
        }

        .navCta {
          border: 1px solid ${ORANGE};
          border-radius: 999px;
          padding: 10px 15px;
          color: ${ORANGE};
          font-weight: 800;
          background: #fff;
          white-space: nowrap;
          transition: 0.2s ease;
        }

        .navCta:hover {
          color: #fff;
          background: ${ORANGE};
        }

        .heroContent {
          max-width: 1120px;
          padding: 62px 0 76px;
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: ${PRIMARY};
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3 {
          margin: 0;
          letter-spacing: -0.03em;
        }

        h1 {
          max-width: 780px;
          margin: 0 auto;
          color: ${DARK};
          font-size: clamp(40px, 5vw, 70px);
          line-height: 1;
        }

        h1 span {
          display: block;
          color: ${PRIMARY};
        }

        h2 {
          font-size: clamp(32px, 3.8vw, 50px);
          line-height: 1.06;
        }

        .heroLead,
        .sectionHeader > p,
        .operationGrid p,
        .compareHead p {
          color: ${MUTED};
          font-size: 18px;
          line-height: 1.65;
        }

        .heroLead {
          max-width: 650px;
          margin: 18px auto 0;
        }

        .heroActions {
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
        }

        .btn {
          min-height: 48px;
          border-radius: 999px;
          padding: 14px 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btnPrimary {
          color: #fff;
          background: ${ORANGE};
          border: 1px solid ${ORANGE};
        }

        .btnSecondary {
          color: ${TEXT};
          background: #fff;
          border: 1px solid ${BORDER};
        }

        .heroPanel {
          width: min(660px, 100%);
          margin: 30px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 20px;
          border-radius: 999px;
          padding: 8px 12px;
          color: ${ORANGE};
          background: #e0f2fe;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .heroBadgeIcon {
          width: 18px;
          height: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: ${ORANGE};
        }

        .heroBadgeIcon svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .operationButton {
          width: 100%;
          min-height: 104px;
          border: 1px solid ${BORDER};
          border-radius: 14px;
          padding: 17px 14px;
          display: grid;
          gap: 6px;
          justify-items: center;
          color: ${DARK};
          text-align: center;
          background: #fff;
          box-shadow: 0 10px 26px rgba(17, 24, 39, 0.04);
          cursor: pointer;
          transition: 0.2s ease;
        }

        .operationButton:hover {
          transform: translateY(-2px);
          border-color: ${PRIMARY_LIGHT};
        }

        .operationIcon {
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: ${ORANGE};
        }

        .operationButton:not(.operationButtonActive) .operationIcon {
          color: ${ORANGE};
        }

        .operationIcon svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .operationButton strong {
          font-size: 15px;
        }

        .operationButton span {
          color: ${MUTED};
          font-size: 12px;
          line-height: 1.45;
        }

        .operationButtonActive {
          border-color: ${PRIMARY};
          color: #fff;
          background: ${PRIMARY};
          box-shadow: 0 18px 34px rgba(2, 132, 199, 0.18);
          transform: translateY(-2px);
        }

        .operationButtonActive .operationIcon,
        .operationButtonActive span {
          color: #fff;
        }

        .heroBilling {
          width: fit-content;
          margin: 20px auto 0;
          gap: 12px;
          justify-content: center;
          font-size: 15px;
        }

        .billingLabel {
          border: 0;
          padding: 0;
          color: ${MUTED};
          background: transparent;
          font: inherit;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .billingLabelActive {
          color: ${DARK};
          font-weight: 700;
        }

        .billingSwitch {
          position: relative;
          width: 48px;
          height: 26px;
          flex-shrink: 0;
          border: 0;
          border-radius: 999px;
          background: ${BORDER};
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .billingSwitchOn {
          background: #dbeafe;
        }

        .billingSwitchKnob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${MUTED};
          box-shadow: 0 1px 4px rgba(17, 24, 39, 0.18);
          transition: transform 0.2s ease;
        }

        .billingSwitchOn .billingSwitchKnob {
          background: ${PRIMARY};
          transform: translateX(22px);
        }

        .billingDiscount {
          margin-left: 2px;
          border-radius: 999px;
          padding: 5px 10px;
          color: ${ORANGE};
          background: #fff4ee;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .heroPlanGrid {
          width: min(900px, 100%);
          margin-top: 38px;
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
          text-align: left;
        }

        .heroPlanCard {
          position: relative;
          min-height: 100%;
          border-radius: 18px;
          padding: 30px 26px;
          display: flex;
          flex-direction: column;
        }

        .heroPlanCard {
          border: 1px solid ${BORDER};
          background: #fff;
          box-shadow: 0 18px 40px rgba(17, 24, 39, 0.04);
        }

        .heroPlanCardPopular {
          border-color: ${PRIMARY};
          box-shadow: 0 24px 54px rgba(2, 132, 199, 0.12);
        }

        .popularBadge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 999px;
          padding: 6px 12px;
          color: #fff;
          background: ${ORANGE};
          font-size: 11px;
          font-weight: 900;
          white-space: nowrap;
        }

        .heroPlanCard h2 {
          color: ${DARK};
          font-size: 24px;
          line-height: 1.1;
        }

        .heroPlanTagline {
          min-height: 42px;
          margin: 10px 0 8px;
          color: ${TEXT};
          font-size: 14px;
          font-weight: 800;
          line-height: 1.45;
        }

        .heroPlanDesc {
          min-height: 88px;
          margin: 0 0 18px;
          color: ${MUTED};
          font-size: 13px;
          line-height: 1.5;
        }

        .heroPrice {
          margin: 0;
          color: ${PRIMARY};
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .heroPrice span,
        .heroPrice small {
          color: ${MUTED};
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0;
        }

        .contractNote {
          margin: 4px 0 18px;
          color: ${MUTED};
          font-size: 12px;
        }

        .heroFeatureList {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .heroFeatureList {
          padding-top: 18px;
          border-top: 1px solid ${BORDER};
          flex: 1;
        }

        .heroFeatureList li {
          position: relative;
          padding-left: 22px;
          color: ${TEXT};
          font-size: 13px;
          line-height: 1.45;
        }

        .heroFeatureList li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #18b56d;
          font-weight: 900;
        }

        .heroPlanLink {
          min-height: 44px;
          margin-top: 28px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          text-align: center;
        }

        .heroPlanLink {
          border: 1px solid ${ORANGE};
        }

        .heroPlanLink-outline {
          color: ${ORANGE};
          background: #fff;
        }

        .heroPlanLink-primary {
          color: #fff;
          background: ${ORANGE};
        }

        .heroPlanLink-premium {
          border-color: ${DARK};
          color: #fff;
          background: ${DARK};
        }

        .section {
          padding: 76px 0;
        }

        .operationSection {
          background: #fff;
          border-bottom: 1px solid ${BORDER};
        }

        .operationGrid {
          border: 1px solid ${BORDER};
          border-radius: 28px;
          padding: 38px;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1fr);
          gap: 42px;
          align-items: center;
          background: linear-gradient(135deg, #fff 0%, ${BG_SOFT} 100%);
          box-shadow: 0 24px 60px rgba(17, 24, 39, 0.05);
        }

        .operationCopy h2 {
          color: ${PRIMARY};
          font-size: clamp(34px, 4vw, 54px);
          letter-spacing: -0.01em;
        }

        .operationTagline {
          margin: 12px 0 12px;
          color: ${DARK};
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 800;
          line-height: 1.18;
        }

        .operationBullets {
          display: grid;
          gap: 12px;
        }

        .operationBullets span {
          border: 1px solid ${BORDER};
          border-radius: 16px;
          padding: 16px 18px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: ${TEXT};
          background: #fff;
          font-weight: 800;
          line-height: 1.4;
          box-shadow: 0 12px 28px rgba(17, 24, 39, 0.04);
        }

        .operationBullets strong {
          width: 22px;
          height: 22px;
          flex: 0 0 22px;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          color: #0f5132;
          background: #dff7ea;
          font-size: 13px;
        }

        .pricingSection {
          color: ${TEXT};
          background: ${BG_SOFT};
        }

        .sectionHeader {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .operationTabs {
          margin: 24px auto 30px;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .operationTab {
          border: 1px solid ${BORDER};
          border-radius: 999px;
          padding: 11px 17px;
          color: ${TEXT};
          background: #fff;
          font-weight: 800;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .operationTab:hover {
          color: ${PRIMARY};
          border-color: ${PRIMARY_LIGHT};
        }

        .operationTabActive {
          border-color: ${PRIMARY};
          color: #fff;
          background: ${PRIMARY};
        }

        .planGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .planCard {
          border: 1px solid ${BORDER};
          border-radius: 20px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          color: ${DARK};
          background: #fff;
        }

        .planCardHighlight {
          border-color: ${PRIMARY};
          box-shadow: 0 18px 40px rgba(2, 132, 199, 0.1);
        }

        .planBadge {
          width: fit-content;
          border-radius: 999px;
          padding: 6px 10px;
          color: ${TEXT};
          background: ${BG_SOFT};
          font-size: 12px;
          font-weight: 800;
        }

        .planCardHighlight .planBadge {
          color: ${ORANGE};
          background: #fff4ee;
        }

        .planCard h3 {
          margin-top: 16px;
          font-size: clamp(24px, 2.8vw, 32px);
        }

        .price {
          margin: 10px 0;
          color: ${PRIMARY};
          font-size: 26px;
          font-weight: 700;
        }

        .planCard p:not(.price) {
          margin: 0 0 18px;
          color: ${MUTED};
          line-height: 1.55;
          flex: 1;
        }

        .btnCard {
          width: 100%;
          color: #fff;
          background: ${ORANGE};
          border: 1px solid ${ORANGE};
        }

        .compareWrap {
          margin-top: 30px;
          overflow-x: auto;
          border: 1px solid ${BORDER};
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 18px 40px rgba(17, 24, 39, 0.04);
        }

        .compareHead {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid ${BORDER};
        }

        .compareHead h3 {
          font-size: clamp(22px, 2.6vw, 30px);
        }

        .compareHead p {
          margin: 6px 0 0;
          font-size: 15px;
        }

        .compareHead > span {
          height: fit-content;
          border-radius: 999px;
          padding: 8px 12px;
          color: ${PRIMARY};
          background: #e0f2fe;
          font-weight: 800;
        }

        .compareTable {
          width: 100%;
          min-width: 760px;
          border-collapse: collapse;
        }

        .compareTable th,
        .compareTable td {
          border-bottom: 1px solid ${BORDER};
          padding: 15px 16px;
          text-align: center;
        }

        .compareTable th:first-child {
          width: 38%;
          text-align: left;
        }

        .compareTable thead th {
          color: ${DARK};
          background: ${BG_SOFT};
        }

        .compareTable small {
          display: block;
          margin-top: 4px;
          color: ${MUTED};
          font-weight: 700;
        }

        .highlightCol {
          background: #f0f9ff;
        }

        .featureMark {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          font-weight: 900;
        }

        .featureMarkIncluded {
          color: #0f5132;
          background: #dff7ea;
        }

        .featureMarkExcluded {
          color: #9b9b9b;
          background: #f1f1f1;
        }

        .includeSliderBlock {
          margin-top: 48px;
          padding-top: 34px;
          border-top: 1px solid ${BORDER};
        }

        .includeSliderHeader {
          text-align: center;
        }

        .includeSliderHeader h2 {
          font-size: clamp(28px, 3.4vw, 42px);
          line-height: 1.08;
        }

        .includeSliderHeader h2 span {
          color: ${PRIMARY};
        }

        .includeSliderHeader p {
          margin: 10px 0 0;
          color: ${MUTED};
          line-height: 1.6;
        }

        .includeSlider {
          margin-top: 24px;
          overflow: hidden;
          padding: 4px 0 16px;
          cursor: grab;
        }

        .includeSlider:active {
          cursor: grabbing;
        }

        .includeSliderTrack {
          width: max-content;
          display: flex;
          gap: 14px;
          animation: includeSliderScroll 34s linear infinite;
          will-change: transform;
        }

        .includeSliderPaused .includeSliderTrack {
          animation-play-state: paused;
        }

        .includeSlideCard {
          width: 245px;
          min-height: 198px;
          border: 1px solid ${BORDER};
          border-radius: 18px;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          scroll-snap-align: start;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 16px 36px rgba(17, 24, 39, 0.05);
        }

        @keyframes includeSliderScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 7px));
          }
        }

        .includeSlideIcon {
          width: 38px;
          height: 38px;
          border: 1px solid #bae6fd;
          border-radius: 13px;
          display: grid;
          place-items: center;
          color: ${PRIMARY};
          background: #f0f9ff;
        }

        .includeSlideIcon svg {
          width: 20px;
          height: 20px;
          display: block;
        }

        .includeSlideCard h3 {
          margin-top: 14px;
          font-size: 17px;
          letter-spacing: -0.02em;
        }

        .includeSlideCard p {
          margin: 8px 0 0;
          color: ${MUTED};
          font-size: 13px;
          line-height: 1.5;
        }

        .acceleratorSection {
          background: #fff;
          border-top: 1px solid ${BORDER};
        }

        .acceleratorGrid {
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .acceleratorCard {
          min-height: 132px;
          border: 1px solid ${BORDER};
          border-radius: 18px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          background: #fff;
          box-shadow: 0 16px 36px rgba(17, 24, 39, 0.04);
          transition: 0.2s ease;
        }

        .acceleratorCard:hover {
          transform: translateY(-2px);
          border-color: ${PRIMARY_LIGHT};
          box-shadow: 0 20px 40px rgba(2, 132, 199, 0.08);
        }

        .acceleratorIcon {
          width: 42px;
          height: 42px;
          border: 1px solid #bae6fd;
          border-radius: 13px;
          display: grid;
          place-items: center;
          color: ${PRIMARY};
          background: #f0f9ff;
        }

        .acceleratorIcon svg {
          width: 22px;
          height: 22px;
          display: block;
        }

        .acceleratorCard h3 {
          margin: 0;
          color: ${DARK};
          font-size: 17px;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .faqSection {
          background: ${BG_SOFT};
          border-top: 1px solid ${BORDER};
        }

        .faqContainer {
          width: min(860px, 92vw);
        }

        .faqList {
          margin-top: 30px;
          display: grid;
          gap: 12px;
        }

        .faqItem {
          border: 1px solid ${BORDER};
          border-radius: 16px;
          background: #fff;
        }

        .faqItem summary {
          position: relative;
          padding: 18px 50px 18px 20px;
          color: ${DARK};
          font-weight: 800;
          cursor: pointer;
          list-style: none;
        }

        .faqItem summary::-webkit-details-marker {
          display: none;
        }

        .faqItem summary::after {
          content: "+";
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: ${PRIMARY};
          font-size: 22px;
          line-height: 1;
        }

        .faqItem[open] summary::after {
          content: "-";
        }

        .faqItem p {
          margin: 0;
          padding: 0 20px 18px;
          color: ${MUTED};
          line-height: 1.65;
        }

        .finalCta {
          padding: 78px 0;
          text-align: center;
          color: #fff;
          background: ${ORANGE};
          border-top: 0;
        }

        .finalCta h2 {
          max-width: 820px;
          margin: 0 auto 24px;
        }

        .finalCta .eyebrow {
          color: rgba(255, 255, 255, 0.82);
        }

        .finalCta .btnPrimary {
          color: ${ORANGE};
          background: #fff;
          border-color: #fff;
        }

        .finalCta .btnPrimary:hover {
          box-shadow: 0 14px 34px rgba(17, 24, 39, 0.18);
        }

        @media (max-width: 900px) {
          .operationGrid,
          .planGrid {
            grid-template-columns: 1fr;
          }

          .topLinks {
            display: none;
          }

          .heroPlanGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .acceleratorGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .heroContent {
            padding-top: 54px;
          }

          .planCardHighlight {
            transform: none;
          }
        }

        @media (max-width: 620px) {
          .topBarInner {
            min-height: 68px;
            gap: 12px;
          }

          .brandMark {
            width: 34px;
            height: 34px;
            border-radius: 10px;
          }

          .brandText strong {
            font-size: 15px;
          }

          .brandText small {
            font-size: 11px;
          }

          .navCta {
            padding: 9px 12px;
            font-size: 12px;
          }

          .heroContent {
            padding-bottom: 58px;
          }

          .heroPanel {
            width: min(380px, 100%);
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .operationButton:nth-child(3) {
            width: min(180px, 100%);
            grid-column: 1 / -1;
            justify-self: center;
          }

          .heroPlanGrid {
            grid-template-columns: 1fr;
          }

          .acceleratorGrid {
            grid-template-columns: 1fr;
          }

          .includeSlideCard {
            width: 230px;
          }

          .heroBilling {
            flex-wrap: wrap;
            row-gap: 10px;
            max-width: min(360px, 100%);
          }

          .billingDiscount {
            margin-left: 0;
          }

          .section {
            padding: 64px 0;
          }

          .compareHead {
            display: grid;
          }

          .compareWrap {
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
            border-left: 0;
            border-right: 0;
            border-radius: 0;
            box-shadow: none;
          }

          .compareHead {
            padding: 16px 4vw;
            gap: 10px;
          }

          .compareHead h3 {
            font-size: 22px;
          }

          .compareHead p {
            font-size: 13px;
            line-height: 1.45;
          }

          .compareHead > span {
            width: fit-content;
            padding: 6px 10px;
            font-size: 12px;
          }

          .compareTable {
            min-width: 0;
            table-layout: fixed;
          }

          .compareTable th,
          .compareTable td {
            padding: 10px 5px;
            font-size: 11px;
            line-height: 1.25;
          }

          .compareTable th:first-child {
            width: 46%;
            padding-left: 4vw;
            font-size: 11.5px;
          }

          .compareTable small {
            display: none;
          }

          .featureMark {
            width: 22px;
            height: 22px;
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
