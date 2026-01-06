import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-warm-wood-200 relative bg-cream-paper bg-no-repeat"

    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 5 }}>
        <div
          style={{
            position: "absolute",
            width: "48%",
            height: "48%",
            top: "-8%",
            left: "-8%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,250,240,0.95), rgba(255,250,240,0) 50%)",
            filter: "blur(40px)",
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "48%",
            height: "48%",
            top: "-8%",
            right: "-8%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 70% 30%, rgba(255,250,240,0.95), rgba(255,250,240,0) 50%)",
            filter: "blur(40px)",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "48%",
            height: "48%",
            bottom: "-8%",
            left: "-8%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 70%, rgba(255,250,240,0.95), rgba(255,250,240,0) 50%)",
            filter: "blur(40px)",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "48%",
            height: "48%",
            bottom: "-8%",
            right: "-8%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 70% 70%, rgba(255,250,240,0.95), rgba(255,250,240,0) 50%)",
            filter: "blur(40px)",
            opacity: 0.75,
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none", zIndex: 12 }}>
          <div
            style={{
              width: "min(100%, 900px)",
              height: "100%",
              borderRadius: "9999px",
              background: "radial-gradient(ellipse at center, rgba(255,250,240,0.95) 0%, rgba(255,250,240,0.9) 25%, rgba(255,250,240,0.2) 45%, rgba(255,250,240,0) 70%)",
              filter: "blur(18px)",
              opacity: 0.95,
            }}
          />
        </div>

        <div className="relative z-20 flex flex-col items-center gap-6">
          <span className="flex flex-col gap-2">
            <h1 className="font-display text-4xl small:text-5xl leading-tight text-ink-brown font-normal">
              Welcome to Teaouse
            </h1>
            <h2 className="font-display text-xl small:text-2xl leading-relaxed text-warm-wood font-normal">
              Where every cup tells a story
            </h2>
          </span>
          <p className="max-w-md text-ink-brown-500 text-base">
            Discover our curated collection of premium teas, crafted with care for
            moments of calm and connection.
          </p>
          <LocalizedClientLink href="/store">
            <button className="btn-primary">
              Explore Our Teas
            </button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
