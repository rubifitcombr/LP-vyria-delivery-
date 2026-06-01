import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestão de pedidos, KDS e cozinha para restaurantes | Vyria Delivery",
  description:
    "Organize pedidos em tempo real, acompanhe preparo na cozinha e reduza erros operacionais com o KDS da Vyria.",
  openGraph: {
    title: "Gestão de pedidos, KDS e cozinha para restaurantes | Vyria Delivery",
    description:
      "Pedidos organizados por etapa, cozinha mais rápida e operação alinhada do atendimento à entrega."
  }
};

export default function OrganizacaoLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
