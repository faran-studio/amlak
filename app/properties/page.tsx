
"use client";

import { properties } from "@/app/data/properties";
import PropertyCard from "@/app/components/property/PropertyCard";
import { useLanguage } from "../context/LanguageContext";

export default function PropertiesPage() {
  const { language, setLanguage } = useLanguage();

  const isPersian = language === "fa";

  return (
    <main
      style={{
        padding: "35px 50px 50px",
        direction: isPersian ? "rtl" : "ltr",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
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
        <a
          href="/"
          style={{
            color: "#6b7280",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "500",
            transition: "0.3s",
          }}
        >
          {isPersian ? "→ بازگشت به صفحه اصلی" : "← Back to Home"}
        </a>

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

      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          color: "#1f2937",
          marginBottom: "20px",
          fontWeight: "400",
        }}
      >
        {isPersian ? "🏠 لیست املاک" : "🏠 Properties"}
      </h1>

      {/* Properties */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={
              isPersian
                ? property.title
                : property.titleEn || property.title
            }
            description={
              isPersian
                ? property.description
                : property.descriptionEn || property.description
            }
            location={
              isPersian
                ? property.location
                : property.locationEn || property.location
            }
            price={isPersian ? property.price : property.priceEn}
            image={property.image}
          />
        ))}
      </div>
    </main>
  );
}