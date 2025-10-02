import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinkClass = 'px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 w-full text-left'
const mobileNavLinkClass = 'block w-full px-4 py-3 text-center text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const scrollToId = useScrollToId()

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close menu when a nav item is clicked
  const handleNavClick = (id) => {
    scrollToId(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="container mx-auto px-4 md:px-6 flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
          <span>Dorwu-Gabriel</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1 mr-2">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2" ref={menuRef}>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm border border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 mr-1"
            title="Resume"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
            aria-label="Toggle menu"
          >
            <div className="relative">
              <div className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              <div className={`absolute inset-0 rounded-full border-2 border-orange-500 animate-pulse ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-slate-200/70 dark:border-slate-800">
          <nav className="flex flex-col items-center py-2">
            <button onClick={() => handleNavClick('home')} className={mobileNavLinkClass}>Home</button>
            <button onClick={() => handleNavClick('about')} className={mobileNavLinkClass}>About</button>
            <button onClick={() => handleNavClick('services')} className={mobileNavLinkClass}>Services</button>
            <button onClick={() => handleNavClick('projects')} className={mobileNavLinkClass}>Projects</button>
            <button onClick={() => handleNavClick('contact')} className={mobileNavLinkClass}>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  )
}
