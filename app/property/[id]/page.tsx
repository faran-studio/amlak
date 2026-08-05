export default function PropertyDetails() {
  return (
    <main
      style={{
        direction: "rtl",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <img
        src="/images/Villa.jpg"
        alt="ملک"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
        }}
      />

      <h1 style={{ marginTop: "30px" }}>
        ویلای لوکس ۲۰۰ متری
      </h1>

      <h2>نوشهر - شهرک برند</h2>

      <h2 style={{ color: "#2563eb" }}>
        قیمت: ۲۵ میلیارد تومان
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "30px auto",
          lineHeight: "2",
        }}
      >
        ویلای مدرن با استخر اختصاصی، حیاط بزرگ،
        دسترسی عالی و موقعیت ممتاز.
      </p>

      <button
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        تماس با مشاور
      </button>
    </main>
  );
}