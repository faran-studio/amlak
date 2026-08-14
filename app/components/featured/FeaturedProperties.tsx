
"use client";

import Image from "next/image";
import Link from "next/link";
import { properties } from "@/app/data/properties";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState } from "react";

export default function FeaturedProperties() {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  return (
    <div
      id="properties"
      style={{
        background: "#ffffff",
        padding: "25px 40px 80px",
        marginBottom: "100px",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            color: "#d4af37",
            fontSize: "13px",
            marginBottom: "15px",
          }}
        >
          {t.featured.label}
        </p>

        <h2
          style={{
            fontSize: "42px",
            fontWeight: "300",
            color: "#1f2937",
            fontFamily: "Georgia, serif",
            lineHeight: "1.25",
            marginBottom: "20px",
          }}
        >
          {t.featured.title}
        </h2>

        <div
          style={{
            width: "90px",
            height: "2px",
            background: "#d4af37",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Properties Area */}
      <div
        style={{
          background: "#f6f2ea",
          padding: "30px",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
gap: "28px",
          }}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow:
                  hoveredId === property.id
                    ? "0 18px 40px rgba(0,0,0,0.12)"
                    : "0 8px 20px rgba(0,0,0,0.06)",
                transform:
                  hoveredId === property.id
                    ? "translateY(-6px)"
                    : "translateY(0)",
                transition:
                  "transform 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              {/* Property Image */}
              <Image
  src={property.image}
  alt={property.title}
  width={600}
  height={450}
  style={{
    width: "100%",
    height: "240px",
    objectFit: "cover",
    display: "block",
    transform:
      hoveredId === property.id
        ? "scale(1.04)"
        : "scale(1)",
    transition: "transform 0.6s ease",
  }}
/>

              {/* Property Link */}
              <div
                style={{
                  padding: "22px 15px 25px",
                }}
              >
                <Link
                  href={`/property/${property.id}`}
                  style={{
                    color: "#b8944f",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    display: "inline-block",
                    paddingBottom: "5px",
                    borderBottom: "1px solid #d4af37",
                  }}
                >
                  {t.featured.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}