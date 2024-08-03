import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"], weight:['400','500','600','700'], variable: '--font-ibm-plex' });

export const metadata: Metadata = {
  title: "Visualify",
  description: "Ai powered Photo Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <ClerkProvider appearance={{variables: {colorPrimary: '#625cf4'} }}>

        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
