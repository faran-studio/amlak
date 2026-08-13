"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t, isPersian } = useLanguage();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "140px 40px 100px",
        direction: isPersian ? "rtl" : "ltr",
      }}
    >
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            letterSpacing: "4px",
            fontSize: "13px",
            marginBottom: "18px",
          }}
        >
          NOOR REAL ESTATE
        </p>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "300",
            color: "#1f2937",
            fontFamily: "Georgia, serif",
            marginBottom: "25px",
          }}
        >
          {t.contactPage.title}
        </h1>

        <div
          style={{
            width: "80px",
            height: "2px",
            background: "#d4af37",
            margin: "0 auto 30px",
          }}
        />

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 60px",
            color: "#666",
            fontSize: "17px",
            lineHeight: "2",
          }}
        >
          {t.contactPage.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "35px 20px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "15px" }}>📞</div>
            <h3 style={{ color: "#d4af37", marginBottom: "12px" }}>
              {t.contactPage.phone}
            </h3>
            <p style={{ color: "#555" }}>+98 912 123 4567</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "35px 20px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "15px" }}>✉️</div>
            <h3 style={{ color: "#d4af37", marginBottom: "12px" }}>
              {t.contactPage.email}
            </h3>
            <p style={{ color: "#555" }}>info@noor-realestate.com</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "35px 20px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "15px" }}>📍</div>
            <h3 style={{ color: "#d4af37", marginBottom: "12px" }}>
              {t.contactPage.location}
            </h3>
            <p style={{ color: "#555" }}>Caspian Coast, Iran</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "#555" }}>
            📸 {t.contactPage.instagram}
          </span>

          <span style={{ color: "#555" }}>
            ✈️ {t.contactPage.telegram}
          </span>

          <span style={{ color: "#555" }}>
            💬 {t.contactPage.whatsapp}
          </span>
        </div>
      </section>
    </main>
  );
}
