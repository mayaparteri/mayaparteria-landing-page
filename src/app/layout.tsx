import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mayaparteria-landing-page.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Maya Parteria",
  description: "Parto humanizado- Rio de Janeiro e Niterói- Maya Parteria. ",
  keywords:
    "parto humanizado, parto domiciliar, parteira urbana, trabalho de parto, parto, Amamentação, pré natal, laser, laserterapia, doula",
  openGraph: {
    type: "website",
    locale: "pt-BR",
    siteName: "Maya Parteria",
    title: "Maya Parteria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta
        property="og:image"
        content="https://mayaparteria-landing-page.vercel.app/icon.jpg"
      />
      <meta
        property="og:url"
        content="https://mayaparteria-landing-page.vercel.app"
      />
      <meta
        name="google-site-verification"
        content="LiVSJe5DIzqIn4t8Iak3RF0d1G7DTWQ2h8ShsdCFJPU"
      />
      {/* Google Tag Manager */}
      <Script id="gtm-function" strategy="beforeInteractive">
        {
          "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NMLW3LQB')"
        }
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3V6LLD4XYG"
        strategy="beforeInteractive"
      ></Script>
      <Script id="gtm-track" strategy="beforeInteractive">
        {
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-3V6LLD4XYG');"
        }
      </Script>
      {/*Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NMLW3LQB"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* Google tag manager */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3V6LLD4XYG"
        strategy="beforeInteractive"
      ></Script>
      <Script id="my-tag-manager" strategy="beforeInteractive">
        {
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-3V6LLD4XYG');"
        }
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
