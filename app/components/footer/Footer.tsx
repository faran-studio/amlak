
 "use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const contactInfo = {
  phone: "+989121234567",
  email: "info@noor-realestate.com",
  whatsapp: "989121234567",
  instagram: "https://instagram.com/",
  telegram: "https://t.me/",
  maps: "https://maps.google.com/",
};

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
        <a
          href={`tel:${contactInfo.phone}`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          📞 +98 912 123 4567
        </a>

        <a
          href={`mailto:${contactInfo.email}`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          ✉️ {contactInfo.email}
        </a>

        <a
          href={contactInfo.maps}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          📍 Caspian Coast, Iran
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <a
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Instagram
        </a>

        <a
          href={contactInfo.telegram}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Telegram
        </a>

        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
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
            gap: "35px",
            flexWrap: "wrap",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#d1d5db",
          }}
        >
          <a
  href="/"
  style={{
    color: "#d1d5db",
    textDecoration: "none",
  }}
>
  {t.footer.home}
</a>

          <Link
            href="/properties"
            style={{ color: "#d1d5db", textDecoration: "none" }}
          >
            {t.footer.properties}
          </Link>

          <Link
            href="/about"
            style={{ color: "#d1d5db", textDecoration: "none" }}
          >
            {t.footer.about}
          </Link>

          <Link
            href="/contact"
            style={{ color: "#d1d5db", textDecoration: "none" }}
          >
            {t.footer.contact}
          </Link>
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