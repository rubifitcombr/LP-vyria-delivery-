import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { KwaiPixel } from "@/components/analytics/kwai-pixel";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyria.delivery"),
  title: "Vyria Delivery — Cardápio digital com IA para delivery",
  description:
    "Crie sua loja de delivery com cardápio digital, pedidos em tempo real e IA integrada para vender mais.",
  openGraph: {
    title: "Vyria Delivery — Cardápio digital com IA para delivery",
    description:
      "Crie sua loja de delivery com cardápio digital, pedidos em tempo real e IA integrada para vender mais.",
    images: ["/hero-fixa.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const trackingScriptSrc =
    process.env.NEXT_PUBLIC_TRACKING_SCRIPT_SRC ??
    "http://localhost:3001/api/tracking/script/cmp5pz9ix0003104my8e6nfhr.js";

  return (
    <html lang="pt-BR">
      <head>
        <Script src={trackingScriptSrc} strategy="beforeInteractive" />
      </head>
      <body className={`${inter.variable} ${inter.className}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B3H0LKMQF4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B3H0LKMQF4');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1438297481404117');
            fbq('track', 'PageView');
          `}
        </Script>
        <KwaiPixel />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1438297481404117&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <div className="floatingSocials" aria-label="Canais de contato">
          <a
            className="floatingSocial floatingWhatsapp"
            href="https://wa.me/5562994856542?text=Ola!%20Quero%20uma%20demonstracao%20da%20Vyria."
            target="_blank"
            rel="noreferrer"
            aria-label="Falar com a Vyria no WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12.04 4A7.93 7.93 0 0 0 4.1 11.94c0 1.4.36 2.77 1.05 3.97L4 20l4.2-1.1a7.92 7.92 0 0 0 3.84.98A7.94 7.94 0 1 0 12.04 4Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="M9.2 8.55c-.16-.36-.33-.37-.49-.38h-.42c-.14 0-.37.05-.56.26-.19.21-.74.72-.74 1.76s.76 2.04.86 2.18c.1.14 1.47 2.35 3.65 3.2 1.8.7 2.17.56 2.56.52.39-.04 1.27-.52 1.45-1.02.18-.5.18-.93.13-1.02-.05-.09-.19-.14-.4-.25-.21-.1-1.27-.63-1.47-.7-.2-.07-.34-.1-.49.1-.14.21-.56.7-.69.84-.13.14-.25.16-.47.05-.21-.1-.9-.33-1.72-1.06-.64-.57-1.07-1.27-1.2-1.48-.13-.21-.01-.33.1-.43.1-.1.21-.25.32-.37.1-.12.14-.21.21-.35.07-.14.04-.26-.02-.37-.05-.1-.47-1.15-.65-1.48Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            className="floatingSocial floatingInstagram"
            href="https://www.instagram.com/vyriadelivery/"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver a Vyria no Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17" cy="7" r="1.1" fill="currentColor" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
