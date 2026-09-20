function Hero() {
  return (
    <section className="pt-[80px] pb-[120px] text-left">
      <div className="mx-auto max-w-[1360px] px-12">
        <h1 className="wrap-break-word font-display uppercase leading-[0.82] tracking-[-0.045em] text-[clamp(64px,13vw,220px)]">
          Games worth
          <br />
          picking <span className="text-highlight">up.</span>
        </h1>

        <div className="mt-[60px] grid grid-cols-1 gap-6 border-t border-hairline pt-10 min-[720px]:grid-cols-2 min-[720px]:gap-[60px]">
          {/*<p className="max-w-[480px] text-[17px]">
            An independent mobile game studio designing unique gaming
            experiences worth spending time with.
          </p>
          */}
          <div className="font-mono text-[12px] uppercase text-muted">
            <p>iOS &middot; Android</p>
            <p>One studio &middot; Many ideas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
