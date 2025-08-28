import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap", // Improves font loading performance
    preload: true,
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
    preload: false, // Only preload essential fonts
});

export const metadata: Metadata = {
    title: "FPJoint et Painture - Spécialistes en joints placo et peinture",
    description: "Services professionnels de finitions placo et peinture intérieure. Équipe dédiée avec attention aux détails. Devis gratuit et travail de qualité garantie.",
    keywords: "placo, peinture, finitions, appartements, maisons, bureaux, joints, renovation",
    authors: [{ name: "FPJoint et Painture" }],
    creator: "FPJoint et Painture",
    publisher: "FPJoint et Painture",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: "FPJoint et Painture - Spécialistes en joints placo et peinture",
        description: "Services professionnels de finitions placo et peinture intérieure. Équipe dédiée avec attention aux détails.",
        type: "website",
        locale: "fr_FR",
        url: "https://fpjointetpainture.fr",
        siteName: "FPJoint et Painture",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "FPJoint et Painture - Services de placo et peinture",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FPJoint et Painture - Spécialistes en joints placo et peinture",
        description: "Services professionnels de finitions placo et peinture intérieure",
        images: ["/og-image.jpg"],
    },
    verification: {
        google: "your-google-verification-code", // Add Google Search Console verification
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <head>
            {/* Preload critical resources */}
            <link rel="preload" href="/test_hero.jpg" as="image" />
            <link rel="dns-prefetch" href="//wa.me" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Critical CSS inlined for LCP improvement */}
            <style dangerouslySetInnerHTML={{
                __html: `
            .hero-section { background: linear-gradient(to bottom, #f1f5f9, #dbeafe); }
            .hero-title { font-size: 2.25rem; font-weight: 800; color: #1e3a8a; margin-bottom: 1rem; }
            @media (min-width: 768px) { .hero-title { font-size: 3rem; } }
          `
            }} />

            {/* Only CSP can be set via meta tag, others must be HTTP headers */}
            <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" />

            {/* Structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "FPJoint et Painture",
                        "description": "Spécialistes en joints placo et peinture intérieure",
                        "url": "https://fpjointetpainture.fr",
                        "telephone": "+33760399295",
                        "email": "florin.panait@yahoo.com",
                        "serviceArea": {
                            "@type": "GeoCircle",
                            "geoMidpoint": {
                                "@type": "GeoCoordinates",
                                "latitude": "48.8566",
                                "longitude": "2.3522"
                            },
                            "geoRadius": "50000"
                        },
                        "areaServed": "France",
                        "priceRange": "€€",
                        "serviceType": ["Joints placo", "Peinture intérieure", "Finitions"]
                    })
                }}
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}