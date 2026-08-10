"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { properties } from "@/app/data/properties";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PropertyDetails() {
  const [showForm, setShowForm] = useState(false);

  const { id } = useParams();
  const { isPersian } = useLanguage();

  const property = properties.find((item) => item.id === id);

  if (!property) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
          background: "#f6f2ea",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "42px",
            fontWeight: "300",
            color: "#111827",
          }}
        >
          {isPersian ? "ملک مورد نظر پیدا نشد" : "Property Not Found"}
        </h1>

        <Link
          href="/"
          style={{
            marginTop: "25px",
            color: "#d4af37",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          {isPersian ? "بازگشت به صفحه اصلی" : "Back to Home"}
        </Link>
      </main>
    );
  }

  const title = isPersian ? property.title : property.titleEn;
  const type = isPersian ? property.type : property.typeEn;
  const location = isPersian ? property.location : property.locationEn;
  const description = isPersian
    ? property.description
    : property.descriptionEn;

  const area = isPersian ? property.area : property.areaEn;
  const building = isPersian ? property.building : property.buildingEn;
  const floor = isPersian ? property.floor : property.floorEn;
  const view = isPersian ? property.view : property.viewEn;
  const distanceToSea = isPersian
    ? property.distanceToSea
    : property.distanceToSeaEn;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f2ea",
        padding: "60px 30px 100px",
        direction: isPersian ? "rtl" : "ltr",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Back */}
        <Link
          href="/#properties"
          style={{
            display: "inline-block",
            marginBottom: "30px",
            color: "#8a7650",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {isPersian ? "← بازگشت به املاک" : "← Back to Properties"}
        </Link>

        {/* Main Image */}
        <div
          style={{
            overflow: "hidden",
            borderRadius: "28px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={property.image}
            alt={title}
            style={{
              width: "100%",
              height: "560px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            padding: "55px 20px 35px",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontSize: "13px",
              marginBottom: "15px",
              textTransform: "uppercase",
            }}
          >
            {type}
          </p>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: "300",
              fontFamily: "Georgia, serif",
              color: "#111827",
              marginBottom: "15px",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              color: "#777",
              fontSize: "16px",
              margin: 0,
            }}
          >
            📍 {location}
          </p>
 <div
            style={{
              width: "80px",
              height: "2px",
              background: "#d4af37",
              margin: "25px auto 0",
            }}
          />
        </div>

        {/* Price */}
        <div
          style={{
            background: "#111827",
            color: "#fff",
            borderRadius: "20px",
            padding: "28px",
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "#d1d5db",
              fontSize: "13px",
              letterSpacing: "2px",
            }}
          >
            {isPersian ? "قیمت" : "PRICE"}
          </p>

          <strong
            style={{
              color: "#d4af37",
              fontSize: "32px",
              fontWeight: "400",
            }}
          >
            {property.price}
          </strong>
        </div>

        {/* Property Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            marginBottom: "45px",
          }}
        >
          <InfoBox
            label={isPersian ? "مساحت" : "AREA"}
            value={area}
          />

          {building !== "—" && (
            <InfoBox
              label={isPersian ? "زیربنا" : "BUILDING"}
              value={building}
            />
          )}

          {property.bedrooms > 0 && (
            <InfoBox
              label={isPersian ? "اتاق خواب" : "BEDROOMS"}
              value={String(property.bedrooms)}
            />
          )}

          {property.bathrooms > 0 && (
            <InfoBox
              label={isPersian ? "حمام" : "BATHROOMS"}
              value={String(property.bathrooms)}
            />
          )}

          {property.parking > 0 && (
            <InfoBox
              label={isPersian ? "پارکینگ" : "PARKING"}
              value={String(property.parking)}
            />
          )}

          {floor && floor !== "—" && (
            <InfoBox
              label={isPersian ? "طبقه" : "FLOOR"}
              value={floor}
            />
          )}

          {view && view !== "—" && (
            <InfoBox
              label={isPersian ? "چشم‌انداز" : "VIEW"}
              value={view}
            />
          )}

          {distanceToSea && distanceToSea !== "—" && (
            <InfoBox
              label={isPersian ? "فاصله تا دریا" : "DISTANCE TO SEA"}
              value={distanceToSea}
            />
          )}
        </div>

        {/* Description */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "25px",
            padding: "45px",
            marginBottom: "45px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontSize: "12px",
              marginBottom: "15px",
            }}
          >
            {isPersian ? "درباره این ملک" : "ABOUT THIS PROPERTY"}
          </p>

          <p
            style={{
              color: "#555",
              fontSize: "17px",
              lineHeight: "2.1",
              margin: 0,
            }}
          >
            {description}
          </p>
        </section>

     {/* Contact */}
        <div
          style={{
            textAlign: "center",
            position: "relative",
          }}
        >
          <button
            type="button"
            onClick={() => setShowForm(true)}
            style={{
              border: "none",
              background: "#d4af37",
              color: "#fff",
              padding: "17px 45px",
              borderRadius: "30px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(212,175,55,0.25)",
            }}
          >
            {isPersian
              ? "درخواست اطلاعات بیشتر"
              : "Request More Information"}
          </button>

          {showForm && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(17,24,39,0.55)",
                backdropFilter: "blur(5px)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "25px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  background: "#ffffff",
                  padding: "40px",
                  borderRadius: "25px",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.20)",
                  textAlign: isPersian ? "right" : "left",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >

                <p
                  style={{
                    color: "#d4af37",
                    letterSpacing: "3px",
                    fontSize: "12px",
                    marginBottom: "12px",
                  }}
                >
                  {isPersian ? "تماس با ما" : "CONTACT US"}
                </p>

                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "30px",
                    fontWeight: "300",
                    color: "#111827",
                    margin: "0 0 12px",
                  }}
                >
                  {isPersian
                    ? "درخواست اطلاعات بیشتر"
                    : "Request More Information"}
                </h2>

                <p
                  style={{
                    color: "#777",
                    marginBottom: "30px",
                    lineHeight: "1.8",
                  }}
                >
                  {isPersian
                    ?` درخواست شما برای «${title}» ثبت خواهد شد.`
                    : `Your request will be submitted for "${title}".`}
                </p>
 <input
                  type="text"
                  placeholder={
                    isPersian ? "نام و نام خانوادگی" : "Full Name"
                  }
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                <input
                  type="tel"
                  placeholder={isPersian ? "شماره تماس" : "Phone Number"}
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                <input
                  type="email"
                  placeholder={isPersian ? "ایمیل" : "Email"}
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "15px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    fontSize: "15px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                <textarea
                  placeholder={isPersian ? "پیام شما" : "Your Message"}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginBottom: "20px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    fontSize: "15px",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: isPersian
                      ? "flex-start"
                      : "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        isPersian
                          ? "درخواست شما با موفقیت ثبت شد."
                          : "Your request has been submitted successfully."
                      );
                    }}
                    style={{
                      background: "#d4af37",
                      color: "#fff",
                      border: "none",
                      padding: "14px 30px",
                      borderRadius: "25px",
                      fontSize: "15px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {isPersian
                      ? "ارسال درخواست"
                      : "Submit Request"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    style={{
                      background: "transparent",
                      color: "#777",
                      border: "1px solid #ddd",
                      padding: "14px 25px",
                      borderRadius: "25px",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    {isPersian ? "بستن" : "Close"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
 function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "25px 15px",
        textAlign: "center",
        boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
      }}
    >
      <p
        style={{
          color: "#999",
          fontSize: "11px",
          letterSpacing: "2px",
          margin: "0 0 10px",
        }}
      >
        {label}
      </p>

      <strong
        style={{
          color: "#1f2937",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        {value}
      </strong>
    </div>
  );
} 