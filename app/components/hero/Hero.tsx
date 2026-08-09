

"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <section
        style={{
          background: "#f4efe8",
          textAlign: "center",
          padding: "120px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "100px auto",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            letterSpacing: "5px",
            color: "#b89b6a",
            fontSize: "13px",
            marginBottom: "25px",
          }}
        >
          {t.hero.welcome}
        </p>

        <h2
          style={{
            fontSize: "58px",
            fontWeight: "300",
            color: "#1f2937",
            fontFamily: "Georgia, serif",
            lineHeight: "1.3",
            marginBottom: "25px",
            textAlign: "center",
            transform: "translateX(-10px)",
          }}
        >
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </h2>

        <div
          style={{
            width: "80px",
            height: "2px",
            background: "#d4af37",
            margin: "0 auto 30px auto",
          }}
        />

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "2",
            color: "#6b7280",
          }}
        >
          {t.hero.description}
        </p>
      </section>
    </>
  );
}