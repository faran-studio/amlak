
"use client";

import Link from "next/link";
import Contact from "../components/contact/Contact";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { language, setLanguage } = useLanguage();

  const isPersian = language === "fa";

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "35px 40px 80px",
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
          onClick={() => setLanguage(language === "en" ? "fa" : "en")}
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

      {/* Contact Content */}
      <Contact />
    </main>
  );
}