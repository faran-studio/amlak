
type PropertyCardProps = {
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
};

export default function PropertyCard({
  title,
  location,
  description,
  price,
  image,
}: PropertyCardProps) {
  return (
    <div
      style={{
        width: "320px",
        background: "#ffffff",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        style={{
          padding: "22px",
          textAlign: "right",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "22px",
            color: "#1f2937",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: "0 0 10px",
            color: "#d4af37",
            fontSize: "14px",
          }}
        >
          📍 {location}
        </p>

        <p
          style={{
            margin: "0 0 15px",
            color: "#6b7280",
            lineHeight: "1.8",
            fontSize: "14px",
          }}
        >
          {description}
        </p>

        <p
          style={{
            margin: 0,
            color: "#111827",
            fontWeight: "600",
            fontSize: "17px",
          }}
        >
          {price}
        </p>
      </div>
    </div>
  );
}