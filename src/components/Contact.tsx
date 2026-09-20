const CONTACT_LINKS = [
  { label: 'General', value: 'moks@1608studios.com', href: 'mailto:moks@1608studios.com' },
  // { label: 'Publishing', value: 'publishing@1608studios.com', href: 'mailto:publishing@1608studios.com' },
  // { label: 'Press', value: 'press@1608studios.com', href: 'mailto:press@1608studios.com' },
  // { label: 'TikTok', value: '@1608studios', href: '#' },
  // { label: 'Instagram', value: '@1608studios', href: '#' },
  // { label: 'LinkedIn', value: '1608 Studios', href: '#' },
]

function Contact() {
  return (
    <section id="contact" className="bg-bg-alt py-[140px]">
      <div className="mx-auto max-w-[1360px] px-12">
        <div className="mb-8">
          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-20">
          <div>
            <h2 className="wrap-break-word mb-6 font-display uppercase leading-[0.95] text-[clamp(32px,4vw,56px)]">
              Get in touch.
            </h2>
            <p className="max-w-[380px] text-[17px] text-muted">
              All correspondence is read personally. Expect a response
              within a few days.
            </p>
          </div>

          <div className="@container">
            {CONTACT_LINKS.map(({ label, value, href }, index) => (
              <div
                key={label}
                className={`grid grid-cols-1 items-start gap-2 border-t border-t-hairline py-[22px] @[520px]:grid-cols-[140px_1fr] @[520px]:items-center @[520px]:gap-6 ${
                  index === CONTACT_LINKS.length - 1 ? 'border-b border-b-hairline' : ''
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {label}
                </span>
                <a
                  href={href}
                  className="min-w-0 whitespace-nowrap font-display uppercase text-ink transition-colors hover:text-accent text-[clamp(12px,6.4cqw,22px)]"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
