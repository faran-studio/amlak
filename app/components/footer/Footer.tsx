export default function Footer() {
    return (

      <footer
        style={{
          background: "#111827",
          color: "#fff",
          textAlign: "center",
          padding: "80px 20px 40px",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            fontSize: "42px",
            letterSpacing: "6px",
            marginBottom: "5px",
            fontFamily: "Georgia, serif",
            fontWeight: "300",
          }}
        >
          NOOR
        </h2>

        <p
          style={{
            color: "#d1d5db",
            letterSpacing: "4px",
            fontSize: "12px",
            marginBottom: "25px",
          }}
        >
          REAL ESTATE
        </p>

        <div>
          HOME
          PROPERTIES
          SERVICES
          ABOUT US
          CONTACT
        </div>


        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 35px",
            color: "#9ca3af",
            lineHeight: "2",
            fontSize: "15px",
          }}
        >
          We connect exceptional properties with exceptional people along the Caspian Coast.
        </p>

        <div
          style={{
            width: "70px",
            height: "2px",
            background: "#d4af37",
            margin: "0 auto 35px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          <span>📞 +98 912 123 4567</span>
          <span>✉️ info@noor-realestate.com</span>
          <span>📍 Caspian Coast, Iran</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            marginBottom: "35px",

          }}
        >
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Instagram
          </a>

          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Telegram
          </a>

          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            WhatsApp
          </a>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "35px auto 25px",
          }}
        >
          <div
            style={{
              height: "1px",
              background: "#d4af37",
              opacity: "0.6",
              marginBottom: "18px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "85px",
              flexWrap: "wrap",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#d1d5db",
            }}
          >
            <span>Home</span>
            <span>Properties</span>
            <span>Services</span>
            <span>About Us</span>
            <span>Contact</span>
          </div>

          <div
            style={{
              height: "1px",
              background: "#d4af37",
              opacity: "0.6",
              marginTop: "18px",
            }}
          />
        </div>

        <p
          style={{
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          © 2025 Noor Real Estate. All Rights Reserved.
        </p>
      </footer>

  )
}
