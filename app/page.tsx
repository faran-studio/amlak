"use client";
import Hero from "@/app/components/hero/Hero";
import ExclusiveLiving from "@/app/components/exclusive/ExclusiveLiving";
import Navigation from "@/app/components/navigation/Navigation";
import FeaturedProperties from "@/app/components/featured/FeaturedProperties";
import About from "@/app/components/about/About";
import Footer from "@/app/components/footer/Footer";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

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

<Navigation />

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
        className="hero-video"
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
              animation: "heroFadeUp 1s ease-out both",
            }}
          >
            {t.videoHero.brand}
          </div>

          <h1
            style={{
              fontSize: "45px",
              color: "#ffffff",
              fontWeight: "300",
              marginBottom: "18px",
              fontFamily: "Georgia, serif",
              animation: "heroFadeUp 1s ease-out 0.2s both",
            }}
          >
            {t.videoHero.title}
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
              animation: "heroFadeUp 1s ease-out 0.4s both",
            }}
          >
            {t.videoHero.description}
          </p>
        </div>


        <div
        className="hero-search"
          style={{
            position: "absolute",
            bottom: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "75%",
            maxWidth: "900px",
            zIndex: 5,
            animation: "searchBarUp 1s ease-out 0.6s both",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "999px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              minHeight: "44px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
              direction: "ltr",
            }}
          >
            <input
              placeholder={t.search.location}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "10px 25px",
                fontSize: "16px",
              }}
            />

            <input
              placeholder={t.search.propertyType}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "10px 25px",
                fontSize: "16px",
                borderRight: "1px solid #ececec",
              }}
            />

            <a
      className="search-button"      
  href="/properties"
  style={{
    background: "#d4af37",
    color: "#fff",
    border: "none",
    height: "44px",
    padding: "0 45px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
    borderRadius: "32px",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  }}
>
  {t.search.button}
</a>
          </div>
        </div>
      </div>
      <Hero />
      <ExclusiveLiving />


<FeaturedProperties />

<About />

      <Footer />

    </main>
  )
}




