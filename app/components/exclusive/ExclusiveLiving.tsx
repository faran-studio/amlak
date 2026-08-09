  export default function ExclusiveLiving() {
  return ( 
       <section
        style={{
          maxWidth: "1400px",
          margin: "120px auto",
          padding: "60px 40px",
          background: "#f6f2ea",
          borderRadius: "30px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >

          {/* گالری تصاویر */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr  1fr 1fr",
              gap: "18px",
            }}
          >

            <img
              src="/images/gallery1.jpg"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <img
              src="/images/gallery2.jpg"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <img
              src="/images/gallery3.jpg"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <img
              src="/images/gallery4.jpg"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <img
              src="/images/gallery5.jpg"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <img
              src="/images/gallery6.jpg"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </div>

          {/* متن سمت راست */}
          <div>
            <div
              style={{
                color: "#d4af37",
                letterSpacing: "3px",
                fontSize: "13px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Exclusive Living
            </div>

            <h2
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                color: "#111827",
                fontWeight: "300",
                fontFamily: "Georgia, serif",
                marginBottom: "25px",
              }}
            >
              Timeless Luxury
              <br />
              By The Sea
            </h2>

            <div
              style={{
                width: "70px",
                height: "2px",
                background: "#d4af37",
                marginBottom: "30px",
                margin: "0 auto 30px",
              }}
            />

            <p
              style={{
                fontSize: "18px",
                lineHeight: "2",
                color: "#6b7280",
                marginBottom: "35px",
              }}
            >
              Discover exceptional residences where modern elegance meets
              breathtaking coastal views. Every property is carefully selected
              to offer privacy, comfort and a refined lifestyle.
            </p>

            <button
              style={{
                background: "#d4af37",
                color: "#fff",
                border: "none",
                padding: "16px 34px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >

              Discover More
            </button>
          </div>

        </div>
      </section>
  );
}
      