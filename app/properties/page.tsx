"use client";

import { properties } from "@/app/data/properties";
import PropertyCard from "@/app/components/property/PropertyCard";
import { useLanguage } from "../context/LanguageContext";

export default function PropertiesPage() {
  const { language } = useLanguage();

  const isPersian = language === "fa";

  return (
    <main
      style={{
        padding: "50px",
        direction: isPersian ? "rtl" : "ltr",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1f2937",
          marginBottom: "20px",
        }}
      >
        {isPersian ? "🏠 لیست املاک" : "🏠 Properties"}
      </h1>

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
