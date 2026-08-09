
import { properties } from "@/app/data/properties";
import Link from "next/link";

export default async function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
          Property Not Found
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
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f2ea",
        padding: "80px 40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <img
          src={property.image}
          alt={property.title}
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "25px",
          }}
        />

        <div style={{ marginTop: "45px" }}>
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontSize: "13px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            {property.type}
          </p>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "300",
              fontFamily: "Georgia, serif",
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            {property.title}
          </h1>

          <div
            style={{
              width: "80px",
              height: "2px",
              background: "#d4af37",
              margin: "0 auto 30px",
            }}
          />

          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "14px 30px",
              background: "#d4af37",
              color: "#ffffff",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Back to Properties
          </Link>
        </div>
      </div>
    </main>
  );
}