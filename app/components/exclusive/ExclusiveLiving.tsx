
"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function ExclusiveLiving() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "120px auto",
        padding: "60px 40px",
        background: "#f6f2ea",
        borderRadius: "30px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* گالری تصاویر */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "18px",
          }}
        >
          <img
          className="exclusive-image"
            src="/images/gallery1.jpg"
            alt=""
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "18px",
              transition: "transform 0.4s ease",
            }}
          />

          <img
            className="exclusive-image"
            src="/images/gallery2.jpg"
            alt=""
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "18px",
              transition: "transform 0.4s ease",
            }}
          />

          <img
            className="exclusive-image"
            src="/images/gallery3.jpg"
            alt=""
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "18px",
              transition: "transform 0.4s ease",
            }}
          />

          <img
            className="exclusive-image"
            src="/images/gallery4.jpg"
            alt=""
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "18px",
              transition: "transform 0.4s ease",
            }}
          />

          <img
            className="exclusive-image"
            src="/images/gallery5.jpg"
            alt=""
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "18px",
              transition: "transform 0.4s ease",
            }}
          />

          <img
            className="exclusive-image"
            src="/images/gallery6.jpg"
            alt=""
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "18px",
             transition: "transform 0.4s ease", 
            }}
          />
        </div>

        {/* متن */}
        <div>
          <div
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontSize: "13px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            {t.exclusive.label}
          </div>

          <h2
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              color: "#111827",
              fontWeight: "300",
              fontFamily: "Georgia, serif",
              marginBottom: "25px",
            }}
          >
            {t.exclusive.titleLine1}
            <br />
            {t.exclusive.titleLine2}
          </h2>

          <div
            style={{
              width: "70px",
              height: "2px",
              background: "#d4af37",
              margin: "0 auto 30px",
            }}
          />

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2",
              color: "#6b7280",
              marginBottom: "35px",
            }}
          >
            {t.exclusive.description}
          </p>

          <a
     className="exclusive-button"     
  href="#properties"
  style={{
    display: "inline-block",
    background: "#d4af37",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    padding: "16px 34px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  }}
>
  {t.exclusive.button}
</a>
        </div>
      </div>
    </section>
  );
}