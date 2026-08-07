import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/hero/Hero";
const properties = [
  {
    title: "ویلا ساحلی",
    location: "نوشهر",
    description: "ویوی دریا",
    price: "۲۵ میلیارد تومان",
    image: "/images/apartment1.jpg",
  },

  {
    title: "ویلا جنگلی",
    location: "نوشهر",
    description: "چشم‌انداز جنگل",
    price: "۲۸ میلیارد تومان",
    image: "/images/land1.jpg",
  },

  {
    title: "آپارتمان لوکس",
    location: "رشت",
    description: "دسترسی عالی",
    price: "۱۲ میلیارد تومان",
    image: "/images/villa1.jpg",
  },

  {
    title: "آپارتمان نوساز",
    location: "رشت",
    description: "نورگیر و مدرن",
    price: "۱۰ میلیارد تومان",
    image: "/images/apartment2.jpg",
  },

  {
    title: "زمین سرمایه‌گذاری",
    location: "نوشهر",
    description: "مناسب ساخت ویلا",
    price: "۸ میلیارد تومان",
    image: "/images/land2.jpg",
  },

  {
    title: "زمین مسکونی",
    location: "رشت",
    description: "موقعیت عالی",
    price: "۷ میلیارد تومان",
    image: "/images/Villa2.jpg",
  
  },
];

export default function Home() {
  return (
  <main
  style={{
    textAlign: "center",
    direction: "rtl",
    width: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  }}
>
<nav
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "90px",
    padding: "0 80px",

    background: "transparent",
    boxShadow: "none",

    backdropFilter: "none",

    borderBottom: "none",

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    direction: "rtl",
  }}
>
  {/* لوگو */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      lineHeight: "1",
      whiteSpace: "nowrap",
    }}
  >
    <span
      style={{
        fontSize: "34px",
        letterSpacing: "5px",
        fontWeight: "300",
        color: "#ffffff",
        fontFamily: "serif",
      }}
    >
      NOOR
    </span>

    <span
      style={{
        fontSize: "11px",
        letterSpacing: "4px",
        color: "#d4af37",
        marginTop: "6px",
      }}
    >
      REAL ESTATE
    </span>
  </div>

  {/* منو */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "35px",
      marginRight: "50px",
      fontSize: "14px",
    
    }}
  >
    <button
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "15px",
        color: "#f8fafc",
        padding: "0",
        transition: "0.3s ease",
      }}
    >
      🌐
    </button>

    <a
      href="#"
      style={{
        textDecoration: "none",
        color: "#f8fafc",
        borderBottom: "2px solid #d4af37",
        paddingBottom: "4px",
        letterSpacing: "2px",
      }}
    >
      Home
    </a>

    <a
      href="#"
      style={{
        textDecoration: "none",
        color: "#f8fafc",
        letterSpacing: "2px",
        
      }}
    >
      
      Properties
    </a>

    <a
      href="#"
      style={{
        textDecoration: "none",
        color: "#f8fafc",
        letterSpacing: "2px",
      }}
    >
      About
    </a>

    <a
      href="#"
      style={{
        textDecoration: "none",
        color: "#f8fafc",
        letterSpacing: "2px",
      }}
    >
      Contact
    </a>
  </div>
</nav>
 <div
  style={{
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    position: "relative",
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: "100%",
      height: "100vh",
      objectFit: "cover",
      display: "block",
    }}
  >
    <source
      src="/media/video/hero-video.mp4"
      type="video/mp4"
    />
  </video>

  {/* لایه تیره */}
  <div

    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(3,7,18,0.35), rgba(3,7,18,0.55))",
    }}
  />
  <div
  style={{
    position: "absolute",
    top: "58%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "100%",
    zIndex: 5,
  }}
>
  <div
    style={{
      color: "#d4af37",
      fontSize: "12px",
      letterSpacing: "4px",
      marginBottom: "12px",
    }}
  >
    NOOR REAL ESTATE
  </div>

  <h1
    style={{
      fontSize: "58px",
      color: "#ffffff",
      fontWeight: "300",
      marginBottom: "18px",
      fontFamily: "Georgia, serif",
    }}
  >
    Find Your Dream Property
  </h1>

  <div
    style={{
      width: "60px",
      height: "2px",
      background: "#d4af37",
      margin: "0 auto 18px auto",
    }}
  />

  <p
    style={{
      color: "rgba(255,255,255,.9)",
      fontSize: "18px",
      fontWeight: "300",
    }}
  >
    Luxury villas, apartments and land in Northern Iran
  </p>
</div>

    
  <div
    style={{
      position: "absolute",
      bottom: "70px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "85%",
      maxWidth: "1100px",
      zIndex: 5,
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "999px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: "64px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
      }}
    >
      <input
        placeholder="Location"
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          padding: "22px 30px",
          fontSize: "16px",
        }}
      />

      <input
        placeholder="Property Type"
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          padding: "22px 30px",
          fontSize: "16px",
          borderRight: "1px solid #ececec",
        }}
      />

      <button
        style={{
          background: "#d4af37",
          color: "#fff",
          border: "none",
          height: "100%",
          padding: "0 45px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "600",
          borderRadius: "32px 0 0 32px",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        Search
      </button>
    </div>
  </div>
</div>
<Hero />

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
<div
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
      FEATURED PROPERTIES
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
      Discover Exceptional Opportunities
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
            <Link href={`/property/${index + 1}`}>
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
                View Details
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
          



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
</main>
  )
}



