import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
