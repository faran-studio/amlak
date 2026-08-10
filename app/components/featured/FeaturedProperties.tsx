
"use client";

import Image from "next/image";
import Link from "next/link";
import { properties } from "@/app/data/properties";
import { useLanguage } from "@/app/context/LanguageContext";

export default function FeaturedProperties() {
 const { t, isPersian } = useLanguage(); 
  return (
 <div
 id="properties"
        style={{
          background: "#ffffff",
          padding: "25px 40px 50px 40px",
          marginBottom: "100px",
        }}
      >
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "60px",
            }}
          >
            {properties.map((property, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  width={320}
                  height={320}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />

                <div
                  style={{
                    marginTop: "18px",
                  }}
                >
                  <Link href={`/property/${property.id}`}>
                    <span
                      style={{
                        color: "#d4af37",
                        borderBottom: "1px solid #d4af37",
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight: "600",
                        display: "inline-block",
                        paddingBottom: "4px",
                        transition: "0.3s",
                        letterSpacing: "0.5px",
                      }}
                    >
                    {t.featured.button}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}