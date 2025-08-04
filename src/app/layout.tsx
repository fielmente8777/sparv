import type { Metadata } from "next";
import "./globals.scss";
import { Call, Footer, NavBar, Whatsapp } from "@/components";
import Script from "next/script";
import RenderChatBot from "@/components/LeadChatbot/RenderChatBot";
// import Script from "next/script";

export const metadata: Metadata = {
  title: "SPARV Aulakhs Resort - 4-Star Beachfront stay in Mandrem",
  description:
    "Book your perfect Mandrem retreat beach resort at SPARV Aulakhs Resort, your 4-star getaway in Goa with sea views and top amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          id="zoho-init"
          strategy="lazyOnload" // Load script after the page loads
          dangerouslySetInnerHTML={{
            __html: `
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || {ready: function () {}};
          `,
          }}
        /> */}
        {/* <Script
          id="zoho-widget"
          src="https://salesiq.zohopublic.in/widget?wc=siq68bd71d03faa62c37d1255ad8a8cdf8200f340a75a33ee9f62c5704ff6ca12a9"
          strategy="lazyOnload"
        /> */}
      </head>
      <body suppressHydrationWarning={true}>
        <RenderChatBot />
        <NavBar />
        {children}
        <Footer />
        <Whatsapp />
        <Call />

        {/* <!-- Google Tag Manager (noscript) --> */}

        {/* <!-- End Google Tag Manager (noscript) --> */}

        {/* <script src="//code.tidio.co/jgcqkgy2d3cjzq4uyy1unspkra3e6oap.js" async></script> */}
        {/* <script>window.$zoho = window.$zoho || { }; $zoho.salesiq = $zoho.salesiq || {ready: function () { } }</script>
        <script id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq68bd71d03faa62c37d1255ad8a8cdf8200f340a75a33ee9f62c5704ff6ca12a9"
          defer></script> */}
      </body>
    </html>
  );
}
