import { Call, Whatsapp } from "@/components";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import { Montserrat, Playfair_Display, Lato, Playball } from "next/font/google";

import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import { WebProvider } from "@/context-api/WebContext";
import ImagePopUp from "@/components/Popup/ImagePopUp";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-m" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-p-d",
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-l",
  weight: ["400", "700"],
});

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pb",
});

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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MCSV6Z7CGY"
        ></Script>
        <Script strategy="lazyOnload" id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MCSV6Z7CGY');`}
        </Script>

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MZ8QMWTB');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${montserrat.variable} ${playball.variable} ${playfairDisplay.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* <RenderChatBot /> */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ8QMWTB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <WebProvider>
          <NavBar />
          {children}
          <Footer />
          <Whatsapp />
          <Call />
          <ImagePopUp />
        </WebProvider>

        {/* <!-- Google Tag Manager (noscript) --> */}

        {/* <!-- End Google Tag Manager (noscript) --> */}

        {/* <script src="//code.tidio.co/jgcqkgy2d3cjzq4uyy1unspkra3e6oap.js" async></script> */}
        {/* <script>window.$zoho = window.$zoho || { }; $zoho.salesiq = $zoho.salesiq || {ready: function () { } }</script>
        <script id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq68bd71d03faa62c37d1255ad8a8cdf8200f340a75a33ee9f62c5704ff6ca12a9"
          defer></script> */}
        <Script id="eazbot-script" strategy="afterInteractive">
          {`window.eazbotConfig = {
            ndid: "e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121",
            hid: "56369483",
          };`}
        </Script>
        <Script
          id="eazbot-widget-script"
          strategy="afterInteractive"
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        ></Script>
      </body>
    </html>
  );
}
