// const META = [
//   { label: 'Founded', value: '2026' },
//   { label: 'Based in', value: 'Botswana' },
//   { label: 'Platforms', value: 'iOS · Android' },
//   { label: 'Focus', value: 'Original mobile games' },
// ]

function About() {
  return (
    <section id="about" className="bg-bg-alt py-20 min-[900px]:py-[140px]">
      <div className="mx-auto max-w-[1360px] px-12">
        <div className="mb-8">
          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            About the studio
          </span>
        </div>

        <h2 className="wrap-break-word mb-20 font-display uppercase leading-[0.88] tracking-[-0.035em] text-[clamp(48px,8vw,120px)]">
          Small studio.
          <br />
          Big ideas.
        </h2>

        <div className="grid grid-cols-1 gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-[100px]">
          <div>
            <p className="text-[20px] leading-[1.5]">
              1608 Studios is an independent mobile game studio. We build
              original games that people actually want to spend time with. Our games have a point of view, a defined identity, and a reason
              to exist.
            </p>
            <p className="mt-6 text-[20px] leading-[1.5]">
              The mobile space is crowded with copies of copies. We are not
              interested in adding to that pile.
            </p>

            {/* <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-10">
              {META.map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-[11px] uppercase text-muted">
                    {label}
                  </p>
                  <p className="font-display text-[20px]">{value}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div>
            <p className="font-sans text-[24px] font-semibold leading-[1.35]">
              Every game we release is built around an idea worth exploring
               whether that idea lives in the mechanic, the aesthetic, the
              story, or all three.
            </p>
            <p className="mt-6 text-[20px] font-normal leading-[1.5]">
              We are small on purpose. It keeps the work honest, the ideas
              focused, and the games personal. There is no committee. No
              middle layer. What we release is what we meant to make.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
