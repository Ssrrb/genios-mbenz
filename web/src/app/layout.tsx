import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SessionProvider } from 'next-auth/react';

import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geniosmbenz.com"),
  title: "Genios MBenz | Taller Especializado en Mercedes Benz en Paraguay",
  description: "Servicio profesional de diagnóstico, mantenimiento y reparación para vehículos Mercedes Benz en Paraguay. Técnicos certificados, repuestos originales y soluciones integrales para todas las series.",
  keywords: "taller Mercedes Benz, reparación Mercedes Paraguay, servicio Mercedes, taller especializado, repuestos originales Mercedes, diagnóstico computarizado, mecánico Mercedes Asunción, mantenimiento sedan Mercedes, reparación SUV Mercedes, clase A, clase C, clase E, clase S, GLA, GLC, GLE, Sprinter",
  authors: [{ name: "Genios MBenz" }],
  category: "Servicios Automotrices",
  openGraph: {
    title: "Genios MBenz | Especialistas en Reparación de Mercedes Benz en Paraguay",
    description: "Taller especializado en diagnóstico, mantenimiento y reparación de vehículos Mercedes Benz con técnicos certificados y repuestos originales en Paraguay.",
    url: "https://geniosmbenz.com",
    siteName: "Genios MBenz",
    locale: "es",
    type: "website",
    images: [
      {
        url: "/mercedes-benz-svgrepo-com.svg",
        width: 600,
        height: 600,
        alt: "Logo de Genios MBenz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genios MBenz | Especialistas en Mercedes Benz en Paraguay",
    description: "Taller especializado en diagnóstico y reparación de Mercedes Benz con técnicos certificados y repuestos originales.",
    images: ["/mercedes-benz-svgrepo-com.svg"],
  },
  alternates: {
    canonical: "https://geniosmbenz.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
