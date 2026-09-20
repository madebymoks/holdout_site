const PRESS_ITEMS = [
  { kind: 'Document · PDF', name: 'Holdout press kit', action: 'Download' },
  { kind: 'Assets · ZIP', name: 'Studio & game logos', action: 'Download' },
  { kind: 'Assets · ZIP', name: 'Holdout screenshots', action: 'Download' },
  { kind: 'Video · MP4', name: 'Gameplay trailer', action: 'Watch' },
  { kind: 'Document · PDF', name: 'Studio fact sheet', action: 'Download' },
]

function Press() {
  return (
    <section id="press" className="bg-bg py-[140px]">
      <div className="mx-auto max-w-[1360px] px-12">
        <div className="mb-8">
          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            Press &amp; media
          </span>
        </div>

        <h2 className="wrap-break-word mb-20 font-display uppercase leading-[0.88] tracking-[-0.035em] text-[clamp(48px,8vw,120px)]">
          Press kit &amp;
          <br />
          resources.
        </h2>

        <div className="grid grid-cols-1 gap-10 min-[720px]:grid-cols-[1fr_2fr] min-[720px]:gap-[100px]">
          <p className="max-w-[320px] text-[18px] text-muted">
            Everything you need to write about or cover a 1608 Studios
            game — logos, screenshots, gameplay footage, studio bio.
          </p>

          <div className="@container">
            {PRESS_ITEMS.map(({ kind, name, action }, index) => (
              <div
                key={name}
                className={`grid grid-cols-1 items-center gap-2 border-b border-b-hairline py-7 transition-[padding-left] duration-200 ease-in-out @[720px]:grid-cols-[180px_1fr_auto] @[720px]:gap-8 @[720px]:hover:pl-3 ${
                  index === 0 ? 'border-t-2 border-t-ink' : ''
                }`}
              >
                <span className="font-mono text-[11px] uppercase text-muted">
                  {kind}
                </span>
                <span className="min-w-0 whitespace-nowrap font-display uppercase text-[clamp(12px,6.5cqw,22px)] @[720px]:text-[22px]">
                  {name}
                </span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-mono text-[12px] uppercase"
                >
                  {action}
                  <span className="text-accent">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Press
