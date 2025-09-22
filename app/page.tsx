import React from "react";
import { FaStickyNote, FaRocket, FaCloud, FaLock } from "react-icons/fa";
import Link from "next/link";
import css from "./Home.module.css";
export const metadata = {
  title: "NoteHub — Create, Organize & Manage Notes Effortlessly",
  description:
    "NoteHub is your modern platform to create, organize, and manage notes with ease. Built in 2025 to make productivity simple and beautiful.",
  keywords: [
    "notes",
    "note taking",
    "productivity",
    "next.js",
    "notehub",
    "markdown",
  ],
  openGraph: {
    title: "NoteHub — Modern note taking",
    description:
      "Create, organize, and manage notes with ease. Beautiful. Fast. 2025.",
    url: "https://your-domain.com/",
    siteName: "NoteHub",
    images: [
      {
        url: "https://your-domain.com/og-notehub.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteHub — Modern note taking",
    description:
      "Create, organize, and manage notes with ease. Beautiful. Fast. 2025.",
    images: ["https://your-domain.com/og-notehub.jpg"],
    creator: "@your_handle",
  },
  alternates: { canonical: "https://your-domain.com/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NoteHub",
    applicationCategory: "ProductivityApplication",
    description:
      "NoteHub is your modern platform to create, organize, and manage notes with ease.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://your-domain.com/",
    brand: { "@type": "Brand", name: "NoteHub" },
    datePublished: "2025-01-01",
  };
  /** 🔎 SEO (Next.js App Router) */

  return (
    <main className={css.main}>
      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className={css.hero}>
        <div className={css.heroBadge}>Built in 2025</div>
        <h1 className={css.title}>
          NoteHub
          <span className={css.gradient}> — your notes, elevated.</span>
        </h1>
        <p className={css.subtitle}>
          Create, organize, and manage notes effortlessly — beautiful by design,
          fast by default.
        </p>

        <div className={css.ctaRow}>
          <Link
            href="/notes"
            className={css.primaryBtn}
            aria-label="Open notes"
          >
            <FaStickyNote className={css.btnIcon} />
            Open Notes
          </Link>
          <Link
            href="/about"
            className={css.secondaryBtn}
            aria-label="About NoteHub"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className={css.features}>
        <div className={css.card}>
          <FaRocket className={css.icon} />
          <h3>Blazing Fast</h3>
          <p>Instant navigation, zero friction. Focus purely on your ideas.</p>
        </div>
        <div className={css.card}>
          <FaCloud className={css.icon} />
          <h3>Cloud Sync</h3>
          <p>Your notes, everywhere. Seamless across all your devices.</p>
        </div>
        <div className={css.card}>
          <FaLock className={css.icon} />
          <h3>Private by Default</h3>
          <p>Security-first. Your thoughts stay yours — always.</p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={css.bottomCta}>
        <h2>Ready to write your first note?</h2>
        <Link
          href="/notes"
          className={css.primaryBtn}
          aria-label="Start writing"
        >
          Start Writing
        </Link>
      </section>
    </main>
  );
}
