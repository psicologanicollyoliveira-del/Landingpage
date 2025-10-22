import type { Metadata } from "next";
import { Fraunces, Quicksand } from "next/font/google";
import "../styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolly Oliveira - Psicóloga CRP-08 46175",
  description:
    "Psicóloga Nicolly Oliveira oferece um espaço seguro e acolhedor para autoconhecimento, bem-estar emocional e melhoria de relacionamentos. Agende sua sessão.",
  keywords: [
    "psicóloga",
    "psicologia",
    "terapia",
    "Nicolly Oliveira",
    "CRP-08 46175",
    "autoconhecimento",
    "bem-estar emocional",
    "saúde mental",
    "terapia online",
    "psicoterapia",
  ],
  authors: [{ name: "Nicolly Oliveira" }],
  creator: "Nicolly Oliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Nicolly Oliveira - Psicóloga CRP-08 46175",
    description:
      "Oferecendo um espaço seguro e acolhedor para seu autoconhecimento e crescimento emocional. Agende sua sessão de terapia.",
    siteName: "Nicolly Oliveira - Psicóloga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolly Oliveira - Psicóloga CRP-08 46175",
    description:
      "Oferecendo um espaço seguro e acolhedor para seu autoconhecimento e crescimento emocional.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${quicksand.variable}`}>
      <head>
        <link rel="canonical" href="https://seusite.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
