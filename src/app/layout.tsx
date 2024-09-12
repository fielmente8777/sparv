import type { Metadata } from "next";
import "./globals.scss";
import { Call, Footer, NavBar, Whatsapp } from "@/components";
// import Script from "next/script";

export const metadata: Metadata = {
  title: "sparv",
  description: "sparv landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
        <Whatsapp />
        <Call />

        {/* <!-- Google Tag Manager (noscript) --> */}
       
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
