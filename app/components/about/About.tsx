
export default function About() {
  return (

      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
          marginBottom: "120px",
        }}
      >


        <div style={{ flex: "1", minWidth: "320px" }}>
          <img
            src="/images/about-us.jpg"
            alt="About Noor Real Estate"
            style={{

              width: "92%",
              marginLeft: "20px",
              marginRight: "20px",
              borderRadius: "24px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              maxHeight: "550px",
            }}
          />
        </div>

        <div style={{ flex: "1", minWidth: "320px" }}>
          <p
            style={{
              letterSpacing: "4px",
              color: "#d4af37",
              fontSize: "13px",
              marginBottom: "15px",
              paddingLeft: "-10px",

            }}
          >
            ABOUT US
          </p>

          <h2
            style={{
              fontSize: "44px",
              fontWeight: "300",
              color: "#1f2937",
              lineHeight: "1.3",
              marginBottom: "25px",
              fontFamily: "Georgia, serif",
            }}
          >
            Building Trust Through
            <br />
            Exceptional Real Estate
          </h2>

          <div
            style={{
              width: "100px",
              height: "2px",
              background: "#d4af37",
              marginBottom: "25px",
              marginLeft: "20px",
              transform: "translatex(-320px)"
            }}
          />

          <p
            style={{
              lineHeight: "2.1",
              color: "#555",
              fontSize: "17px",
              marginRight: "-20px",
              paddingRight: "15px",
              transform: "translatex(15px)"
            }}
          >
            In the world of real estate, trust is the most valuable asset.

            <br />
            <br />

            Our mission is to provide transparent, professional and reliable
            services, helping our clients make confident decisions when buying,
            selling or investing in property.

            <br />
            <br />

            We believe that a successful transaction does not end with signing
            a contract; it marks the beginning of a valuable and long-term
            relationship.

            <br />
            <br />

            <strong>
              Your trust is our greatest asset.
            </strong>
          </p>
        </div>
      </section>
);
}
      