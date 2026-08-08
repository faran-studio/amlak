import Image from "next/image";
import { properties } from "@/app/data/properties";
import PropertyCard from "@/app/components/property/PropertyCard";

export default function PropertiesPage() {
  return (
    <main
      style={{
        padding: "50px",
        direction: "rtl",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🏠 لیست املاک
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
        {properties.map((property, index) => (
        <PropertyCard
        key={index}
    title={property.title}
    description={property.description}
    location={property.location}
    price={property.price}
    image={property.image}
/>  
        ))}
      </div>
    </main>
  );
}