import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos Vyria Delivery para delivery, presencial e híbrido",
  description:
    "Compare os planos Start, Growth e Pro da Vyria Delivery para operações de delivery, atendimento presencial e modelo híbrido.",
  openGraph: {
    title: "Planos Vyria Delivery para delivery, presencial e híbrido",
    description:
      "Escolha o plano ideal para cardápio digital, pedidos em tempo real, QR Code, garçom, caixa, KDS, impressão e IA."
  }
};

export default function PlanosLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
