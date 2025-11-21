import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThreeJSBackground from "@/components/layout/Background";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruna Verrone | Front-end Developer",
  description: "Portfólio de Bruna Verrone, desenvolvedora front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThreeJSBackground>
            {children}
            <SpeedInsights />
          </ThreeJSBackground>
        </LanguageProvider>
      </body>
    </html>
  );
}
