import { Link } from 'react-router-dom'
import menuShot from '../assets/holdout_pics/holdout-menu.jpeg'
import screenshot1 from '../assets/holdout_pics/holdout-screenshot-1.jpeg'
import screenshot2 from '../assets/holdout_pics/holdout-screenshot-2.jpeg'
import screenshot3 from '../assets/holdout_pics/holdout-screenshot-3.jpeg'
import screenshot4 from '../assets/holdout_pics/holdout-screenshot-4.jpeg'
import trailer from '../assets/holdout_pics/holdout-video.mp4'
import holdoutLogo from '../assets/holdout_pics/HOLDOUT_logo.png'

const GALLERY = [
  { src: menuShot, alt: 'Holdout main menu' },
  { src: screenshot2, alt: 'Holdout gameplay screenshot' },
  { src: screenshot3, alt: 'Holdout gameplay screenshot' },
  { src: screenshot4, alt: 'Holdout gameplay screenshot' },
  { src: screenshot1, alt: 'Holdout gameplay screenshot' },
]

function HoldoutPage() {
  return (
    <>
      <section className="bg-bg pt-[80px] pb-[100px]">
        <div className="mx-auto max-w-[1360px] px-12">
          <Link
            to="/#games"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.04em] text-muted transition-colors hover:text-accent"
          >
            &larr; All games
          </Link>

          <p className="mt-10 min-w-0 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            Survival &middot; Released
          </p>

          <h1 className="wrap-break-word mt-2 font-display uppercase leading-[0.88] tracking-[-0.035em] text-[clamp(32px,11vw,160px)]">
            Holdout
          </h1>
          <p className="mt-2 font-mono text-[14px] uppercase tracking-[0.08em] text-muted">
            Shoot to Survive
          </p>

          <p className="mt-6 max-w-[560px] text-[20px] leading-[1.5] text-muted">
            A tense survival experience built around a single, escalating
            idea. Take aim, hold the line, and see how long you can last.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="font-mono text-[12px] uppercase text-muted">
              iOS
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1 font-mono text-[12px] uppercase text-ink transition-colors hover:text-accent"
            >
              App Store <span className="text-accent">↗</span>
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center gap-1 font-mono text-[12px] uppercase text-ink transition-colors hover:text-accent"
            >
              Google Play <span className="text-accent">↗</span>
            </a> */}
          </div>

          <Link
            to="/games/holdout/privacy"
            className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.04em] text-muted transition-colors hover:text-accent"
          >
            Privacy Policy
          </Link>
        </div>
      </section>

      <section className="bg-bg-alt py-[100px]">
        <div className="mx-auto max-w-[1360px] px-12">
          <div className="grid grid-cols-1 items-center gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-20">
            <div>
              <img src={holdoutLogo} alt="Holdout" className="mx-auto block h-auto w-[70%]" />
              <p className="mt-8 mb-6 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                About the game
              </p>
              <p className="text-[20px] leading-[1.5]">
                Holdout drops you into a single vantage point and asks one
                question: how long can you last? Waves close in from every
                angle, and your only tools are a steady aim and split-second
                decisions.
              </p>
              <p className="mt-6 text-[17px] leading-[1.5] text-muted">
                Built for short, replayable sessions, Holdout rewards
                precision over panache — every shot counts, every life
                matters, and the incoming counter never stops climbing.
              </p>
            </div>

            <div className="mx-auto aspect-884/1796 w-full overflow-hidden border border-hairline bg-bg min-[900px]:h-[70vh] min-[900px]:w-auto">
              <video
                src={trailer}
                controls
                preload="metadata"
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-[100px]">
        <div className="mx-auto max-w-[1360px] px-12">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            Screenshots
          </p>
          <div className="grid grid-cols-2 gap-6 min-[640px]:grid-cols-3 min-[1024px]:grid-cols-5">
            {GALLERY.map(({ src, alt }) => (
              <div
                key={src}
                className="aspect-360/713 w-full overflow-hidden border border-hairline bg-bg-alt"
              >
                <img src={src} alt={alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HoldoutPage
