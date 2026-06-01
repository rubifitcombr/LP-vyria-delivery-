import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoatendimento por QR Code para restaurantes | Vyria Delivery",
  description:
    "Venda por QR Code na mesa, envie pedidos direto para o painel e reduza filas com o autoatendimento da Vyria.",
  openGraph: {
    title: "Autoatendimento por QR Code para restaurantes | Vyria Delivery",
    description:
      "Cardápio digital, pedidos por mesa e operação mais rápida para restaurantes, bares e lanchonetes."
  }
};

export default function AutoatendimentoLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
