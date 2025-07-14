import './globals.css';

import React from 'react';

import type { Metadata } from 'next';
import { Gowun_Dodum } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'sonner';

import { PostHogProvider } from '@/providers/posthog-provider';

const gowunDodum = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orin - Unlimited tutoring for middle school math",
  description: "Meet Orin, your private tutor.",
  keywords: [
    "education",
    "AI",
    "middle school",
    "personalized learning",
    "math tutoring",
  ],
  authors: [{ name: "InCortical" }],
  creator: "InCortical",
  publisher: "InCortical",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://incortical.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orin - Unlimited tutoring for middle school math",
    description: "Meet Orin, your private tutor.",
    url: "https://incortical.com",
    siteName: "InCortical",
    type: "website",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "InCortical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orin - Unlimited tutoring for middle school math",
    description: "Meet Orin, your private tutor.",
    images: ["/og_image.png"],
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
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gowunDodum.className}>
      <head>
        {/* Koah Pixel */}
        <Script
          id="koah-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !(function (w, d) {
                if (!w.kad) {
                  var p = (w.kad = function () {
                    p.sendEvent
                      ? p.sendEvent.apply(p, arguments)
                      : p.queue.push(arguments);
                  });
                  p.queue = [];
                  var t = d.createElement("script");
                  (t.src = "https://app.koah.ai/pixel.js"), (t.async = !0);
                  var s = d.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(t, s);
                }
              })(window, document);
              kad("init", "b514521c-6fe7-49a6-9b89-209827dc4633");
              kad("track", "PageView");
            `,
          }}
        />

        {/* Meta Pixel Code - Deferred */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                setTimeout(function () {
                  !(function (f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function () {
                      n.callMethod
                        ? n.callMethod.apply(n, arguments)
                        : n.queue.push(arguments);
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = "2.0";
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s);
                  })(
                    window,
                    document,
                    "script",
                    "https://connect.facebook.net/en_US/fbevents.js"
                  );
                  fbq("init", "735061775558303");
                  fbq("track", "PageView");
                }, 2000);
              });
            `,
          }}
        />

        {/* Google Analytics - Deferred */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                setTimeout(function () {
                  var script = document.createElement("script");
                  script.async = true;
                  script.src =
                    "https://www.googletagmanager.com/gtag/js?id=AW-16902826455";
                  document.head.appendChild(script);

                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag("js", new Date());
                  gtag("config", "AW-16902826455");
                }, 1000);
              });
            `,
          }}
        />

        {/* Noscript fallbacks */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=735061775558303&ev=PageView&noscript=1"
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://app.koah.ai/kad/tr?id=b514521c-6fe7-49a6-9b89-209827dc4633&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="antialiased">
        <PostHogProvider>
          {children}
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
