
"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto 120px",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "100%",
          marginBottom: "60px",
        }}
      >
        <img
          src="/images/about-us.jpg"
          alt={t.about.imageAlt}
          style={{
            display: "block",
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            maxHeight: "550px",
            objectFit: "cover",
            margin: "0 auto",
            borderRadius: "24px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Text */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            color: "#b08a3c",
            fontSize: "13px",
            margin: "0 0 18px",
          }}
        >
          {t.about.label}
        </p>

        <h2
          style={{
            fontSize: "clamp(36px, 8vw, 58px)",
            fontWeight: "300",
            color: "#1f2937",
            lineHeight: "1.18",
            margin: "0 0 30px",
            fontFamily: "Georgia, serif",
          }}
        >
          {t.about.titleLine1}
          <br />
          {t.about.titleLine2}
        </h2>

        <div
          style={{
            width: "85px",
            height: "2px",
            background: "#d4af37",
            margin: "0 auto 35px",
          }}
        />

        <div
          style={{
            width: "100%",
            color: "#555",
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "2",
            boxSizing: "border-box",
          }}
        >
          <p style={{ margin: "0 0 28px" }}>
            {t.about.paragraph1}
          </p>

          <p style={{ margin: "0 0 28px" }}>
            {t.about.paragraph2}
          </p>

          <p style={{ margin: "0 0 28px" }}>
            {t.about.paragraph3}
          </p>

          <p
            style={{
              margin: 0,
              color: "#b08a3c",
              fontWeight: "600",
            }}
          >
            {t.about.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}