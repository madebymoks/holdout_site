import { Link } from 'react-router-dom'
import holdoutScreenshot from '../assets/holdout_pics/holdout-screenshot-1.jpeg'

const GAMES = [
  {
    id: 'holdout',
    title: 'Holdout: Shoot to Survive',
    tagline: 'A tense survival experience built around a single, escalating idea.',
    genre: 'Survival',
    status: 'Released',
    platforms: 'iOS',
    href: '/games/holdout',
    image: holdoutScreenshot,
  },
  // {
  //   id: 'project-two',
  //   title: 'Untitled Project',
  //   tagline: 'Details coming soon.',
  //   genre: 'TBA',
  //   status: 'In development',
  //   platforms: 'iOS · Android',
  //   href: '#',
  // },
  // {
  //   id: 'project-three',
  //   title: 'Untitled Project',
  //   tagline: 'Details coming soon.',
  //   genre: 'TBA',
  //   status: 'Coming soon',
  //   platforms: 'iOS · Android',
  //   href: '#',
  // },
]

function Games() {
  return (
    <section id="games" className="bg-bg py-[140px]">
      <div className="mx-auto max-w-[1360px] px-12">
        <div className="mb-8">
          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            Our games
          </span>
        </div>

        <h2 className="wrap-break-word mb-20 font-display uppercase leading-[0.88] tracking-[-0.035em] text-[clamp(48px,8vw,120px)]">
          What we
          <br />
          make.
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-3">
          {GAMES.map(({ id, title, tagline, genre, status, platforms, href, image }) => (
            <Link key={id} to={href} className="group flex w-full max-w-[280px] flex-col gap-4">
              <div className="flex aspect-360/713 w-full items-center justify-center overflow-hidden border border-hairline bg-bg-alt transition-colors group-hover:border-ink">
                {image ? (
                  <img
                    src={image}
                    alt={`${title} gameplay screenshot`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-[11px] uppercase text-muted">
                    Screenshot
                  </span>
                )}
              </div>

              <div>
                <p className="min-w-0 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {genre} &middot; {status}
                </p>
                <h3 className="wrap-break-word mt-2 font-display text-[26px] uppercase">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] text-muted">{tagline}</p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase text-muted">
                    {platforms}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[12px] uppercase">
                    View game <span className="text-accent">↗</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Games
