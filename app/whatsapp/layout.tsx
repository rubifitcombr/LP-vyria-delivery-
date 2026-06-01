import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robô de WhatsApp para delivery e restaurantes | Vyria Delivery",
  description:
    "Automatize respostas no WhatsApp, conduza pedidos e reduza mensagens repetidas com o robô de atendimento da Vyria.",
  openGraph: {
    title: "Robô de WhatsApp para delivery e restaurantes | Vyria Delivery",
    description:
      "Atendimento automático no WhatsApp para responder clientes, organizar pedidos e vender com mais agilidade."
  }
};

export default function WhatsAppLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
