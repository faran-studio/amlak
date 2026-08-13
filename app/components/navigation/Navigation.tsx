
"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "90px",
        padding: "0 80px",
        background: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        direction: "rtl",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          lineHeight: "1",
          whiteSpace: "nowrap",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontSize: "34px",
            letterSpacing: "5px",
            fontWeight: "300",
            color: "#ffffff",
            fontFamily: "serif",
          }}
        >
          NOOR
        </span>

        <span
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            color: "#d4af37",
            marginTop: "6px",
          }}
        >
          REAL ESTATE
        </span>
      </Link>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
          marginRight: "50px",
          fontSize: "14px",
        }}
      >
        {/* Language */}
        <button
          onClick={() => setLanguage(language === "en" ? "fa" : "en")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            color: "#f8fafc",
            padding: 0,
          }}
          aria-label="Change language"
        >
          🌐
        </button>

        {/* Home */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#f8fafc",
            letterSpacing: "2px",
          }}
        >
          {t.nav.home}
        </Link>

        {/* Properties */}
        <Link
          href="/properties"
          style={{
            textDecoration: "none",
            color: "#f8fafc",
            letterSpacing: "2px",
          }}
        >
          {t.nav.properties}
        </Link>

        {/* About */}
        <Link
          href="/about"
          style={{
            textDecoration: "none",
            color: "#f8fafc",
            letterSpacing: "2px",
          }}
        >
          {t.nav.about}
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: "#f8fafc",
            letterSpacing: "2px",
          }}
        >
          {t.nav.contact}
        </Link>
      </div>
    </nav>
  );
}