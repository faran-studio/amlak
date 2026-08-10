
"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        background: "#111827",
        color: "#fff",
        textAlign: "center",
        padding: "80px 20px 40px",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "42px",
          letterSpacing: "6px",
          marginBottom: "5px",
          fontFamily: "Georgia, serif",
          fontWeight: "300",
        }}
      >
        NOOR
      </h2>

      <p
        style={{
          color: "#d1d5db",
          letterSpacing: "4px",
          fontSize: "12px",
          marginBottom: "25px",
        }}
      >
        REAL ESTATE
      </p>

      <div>
        {t.footer.home}
        {" "}
        {t.footer.properties}
        {" "}
        {t.footer.services}
        {" "}
        {t.footer.about}
        {" "}
        {t.footer.contact}
      </div>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 35px",
          color: "#9ca3af",
          lineHeight: "2",
          fontSize: "15px",
        }}
      >
        {t.footer.description}
      </p>

      <div
        style={{
          width: "70px",
          height: "2px",
          background: "#d4af37",
          margin: "0 auto 35px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <span>📞 +98 912 123 4567</span>
        <span>✉️ info@noor-realestate.com</span>
        <span>📍 Caspian Coast, Iran</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          marginBottom: "35px",
        }}
      >
        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          Instagram
        </a>

        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          Telegram
        </a>

        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          WhatsApp
        </a>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "35px auto 25px",
        }}
      >
        <div
          style={{
            height: "1px",
            background: "#d4af37",
            opacity: "0.6",
            marginBottom: "18px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "85px",
            flexWrap: "wrap",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#d1d5db",
          }}
        >
          <span>{t.footer.home}</span>
          <span>{t.footer.properties}</span>
          <span>{t.footer.services}</span>
          <span>{t.footer.about}</span>
          <span>{t.footer.contact}</span>
        </div>

        <div
          style={{
            height: "1px",
            background: "#d4af37",
            opacity: "0.6",
            marginTop: "18px",
          }}
        />
      </div>

      <p
        style={{
          color: "#6b7280",
          fontSize: "13px",
        }}
      >
        {t.footer.copyright}
      </p>
    </footer>
  );
}