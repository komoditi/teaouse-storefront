import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-warm-wood-200 relative bg-cream-paper">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
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
  )
}

export default Hero
