import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { KANZLEI } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: "Andrae & Simmer Rechtsanwälte · Saarbrücken",
    template: "%s · Andrae & Simmer"
  },
  description:
    "Rechtsanwälte Andrae & Simmer in Saarbrücken. Zivilrecht, Wirtschaftsrecht, Strafrecht – Kanzleitradition seit 1963, moderne Beratung mit Weitsicht.",
  keywords: [
    "Rechtsanwalt Saarbrücken",
    "Andrae Simmer",
    "Kanzlei Saarland",
    "Autohausrecht",
    "Arbeitsrecht",
    "Familienrecht",
    "Verkehrsrecht"
  ],
  openGraph: {
    title: "Andrae & Simmer Rechtsanwälte",
    description:
      "Rechtsberatung mit Weitsicht – Kanzleitradition seit 1963 im Herzen Saarbrückens.",
    locale: "de_DE",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen antialiased">
        <div className="grain" aria-hidden />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
