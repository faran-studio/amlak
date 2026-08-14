
"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="navigation"
      style={{
        direction: "rtl",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="navigation-logo"
        onClick={closeMenu}
      >
        <span className="navigation-logo-main">
          NOOR
        </span>

        <span className="navigation-logo-sub">
          REAL ESTATE
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="navigation-links">
        {/* Language */}
        <button
          onClick={() => setLanguage(language === "en" ? "fa" : "en")}
          className="navigation-language"
          aria-label="Change language"
        >
          🌐
        </button>

        <Link href="/" className="navigation-link">
          {t.nav.home}
        </Link>

        <Link href="/properties" className="navigation-link">
          {t.nav.properties}
        </Link>

        <Link href="/about" className="navigation-link">
          {t.nav.about}
        </Link>

        <Link href="/contact" className="navigation-link">
          {t.nav.contact}
        </Link>
      </div>

      {/* Mobile Controls */}
      <div className="mobile-controls">
        <button
          onClick={() => setLanguage(language === "en" ? "fa" : "en")}
          className="navigation-language"
          aria-label="Change language"
        >
          🌐
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={closeMenu}>
            {t.nav.home}
          </Link>

          <Link href="/properties" onClick={closeMenu}>
            {t.nav.properties}
          </Link>

          <Link href="/about" onClick={closeMenu}>
            {t.nav.about}
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            {t.nav.contact}
          </Link>
        </div>
      )}
    </nav>
  );
}