import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import VapiVoiceAgent from "./components/VapiVoiceAgent";

export const metadata: Metadata = {
  metadataBase: new URL("https://roshan-kumar-sahu.vercel.app"),
  title: "ROSHAN | SOFTWARE DEVELOPER",
  description:
    "Roshan | Software Developer specializing in high-performance web applications and innovative solutions. Explore my portfolio showcasing expertise in full-stack development, UI/UX design, and cutting-edge technologies.",
  keywords: [
    "Roshan Kumar Sahu",
    "Full Stack Developer",
    "Igniter",
    "Portfolio",
    "Web Development",
    "AI Engineer",
    "RAG Systems",
    "Software architect",
    "Tech Innovator",
    "Creative Coder",
    "Problem Solver",
    "Software Solutions",
  ],
  authors: [{ name: "Roshan Kumar Sahu" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "ROSHAN | SOFTWARE DEVELOPER",
    description:
      "Professional Software Developer specializing in high-performance web applications and innovative solutions.",
    images: [{ url: "/Assets/projects/collatask.png" }],
  },
  icons: {
    icon: [
      { url: "/Assets/images/roshlogo.png", type: "image/png" },
      { url: "/Assets/images/roshlogo.png", sizes: "32x32", type: "image/png" },
      { url: "/Assets/images/roshlogo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/Assets/images/roshlogo.png",
    apple: "/Assets/images/roshlogo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="gtm-init" strategy="beforeInteractive">
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-TLNG322R');`}
        </Script>
        <VapiVoiceAgent />
        {children}
      </body>
    </html>
  );
}
