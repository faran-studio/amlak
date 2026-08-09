
"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Navigation() {
  const { language,setLanguage,  t } = useLanguage();

  return (
 
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          padding: "0 80px",

          background: "transparent",
          boxShadow: "none",

          backdropFilter: "none",

          borderBottom: "none",

          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          direction: "rtl",
        }}
      >
        {/* لوگو */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: "1",
            whiteSpace: "nowrap",
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
        </div>

        {/* منو */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
            marginRight: "50px",
            fontSize: "14px",

          }}
        >
         <button
  onClick={() => setLanguage(language === "en" ? "fa" : "en")}
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "#f8fafc",
    padding: "0",
    transition: "0.3s ease",
  }}
  aria-label="Change language"
>
  🌐
</button> 

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              borderBottom: "2px solid #d4af37",
              paddingBottom: "4px",
              letterSpacing: "2px",
            }}
          >
           {t.nav.home}
          </a>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              letterSpacing: "2px",

            }}
          >

           {t.nav.properties}
          </a>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              letterSpacing: "2px",
            }}
          >
            {t.nav.about}
          </a>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              letterSpacing: "2px",
            }}
          >
            {t.nav.contact}
          </a>
        </div>
      </nav> 
  );
}
