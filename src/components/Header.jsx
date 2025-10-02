import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navLinkClass = 'px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'

function useScrollToId() {
  const navigate = useNavigate()
  const location = useLocation()
  return (id) => {
    const go = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      // wait a tick for Home to mount
      setTimeout(go, 50)
    } else {
      go()
    }
  }
}

export default function Header() {
  const scrollToId = useScrollToId()
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="container mx-auto px-4 md:px-6 flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
          <span>Dorwu-Gabriel</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            <button onClick={() => scrollToId('home')} className={navLinkClass}>Home</button>
            <button onClick={() => scrollToId('about')} className={navLinkClass}>About</button>
            <button onClick={() => scrollToId('services')} className={navLinkClass}>Services</button>
            <button onClick={() => scrollToId('projects')} className={navLinkClass}>Projects</button>
            <button onClick={() => scrollToId('contact')} className={navLinkClass}>Contact</button>
          </nav>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm border border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Resume"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
