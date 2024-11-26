import type { Metadata } from "next";
import "./globals.scss";
import { Call, Footer, NavBar, Whatsapp } from "@/components";
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
      <head></head>
      <body suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
        <Whatsapp />
        <Call />

        {/* <!-- Google Tag Manager (noscript) --> */}

        {/* <!-- End Google Tag Manager (noscript) --> */}

        <script src="//code.tidio.co/jgcqkgy2d3cjzq4uyy1unspkra3e6oap.js" async></script>
      </body>
    </html>
  );
}
