import { Link } from 'react-router-dom'
import logo from '../assets/studio_pics/1608_logo_dark.png'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Games', href: '/#games' },
  // { label: 'Press', href: '/#press' },
  { label: 'Contact', href: '/#contact' },
]

function Navigation() {
  return (
    <header className="sticky top-0 z-[100] h-24 border-b border-hairline bg-bg">
      <div className="mx-auto flex h-full max-w-[1360px] items-center px-12">
        <nav className="flex h-full w-full items-center justify-between">
          <Link to="/" className="flex h-full items-center py-3">
            <img src={logo} alt="1608 Studios" className="h-full w-auto" />
          </Link>

          <ul className="hidden items-center gap-8 min-[720px]:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-mono text-[13px] font-medium uppercase tracking-[0.04em] transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
