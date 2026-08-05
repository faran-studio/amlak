import Image from "next/image";

const properties = [
  {
    title: "ویلا ۳۰۰ متری",
    location: "نوشهر - شهرک برند",
    price: "۲۵ میلیارد تومان",
    image: "/images/Villa.jpg",
  },
  {
    title: "آپارتمان ۱۵۰ متری",
    location: "تهران - سعادت آباد",
    price: "۱۲ میلیارد تومان",
    image: "/images/Villa.jpg",
  },
  {
    title: "زمین ۵۰۰ متری",
    location: "چمستان",
    price: "۸ میلیارد تومان",
    image: "/images/Villa.jpg",
  },
];

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
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "20px",
              width: "320px",
              padding: "15px",
              backgroundColor: "white",
            }}
          >
            <Image
              src={property.image}
              alt={property.title}
              width={300}
              height={220}
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <h3>{property.title}</h3>

            <p>{property.location}</p>

            <p
              style={{
                color: "#2563eb",
                fontWeight: "bold",
              }}
            >
              قیمت: {property.price}
            </p>

            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              مشاهده جزئیات
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}