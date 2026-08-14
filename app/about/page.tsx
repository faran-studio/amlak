
"use client";

import Link from "next/link";
import About from "../components/about/About";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { language, setLanguage } = useLanguage();

  const isPersian = language === "fa";

  return (
    <main
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "35px 20px 80px",
        boxSizing: "border-box",
        direction: isPersian ? "rtl" : "ltr",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "45px",
          minHeight: "35px",
        }}
      >
        {/* Back to Home */}
        <Link
          href="/"
          style={{
            color: "#6b7280",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {isPersian ? "→ بازگشت به صفحه اصلی" : "← Back to Home"}
        </Link>

        {/* Language */}
        <button
          onClick={() =>
            setLanguage(language === "en" ? "fa" : "en")
          }
          aria-label="Change language"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            padding: 0,
          }}
        >
          🌐
        </button>
      </div>

      {/* About Content */}
      <About />
    </main>
  );
}