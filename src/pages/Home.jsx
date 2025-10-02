import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <>
    <section id="home" className="grid md:grid-cols-2 items-center gap-10 md:gap-16">
      <div className="rounded-xl shadow-[0_10px_30px_RGBA(0,0,0,0.08)] bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-8 md:p-12 h-[360px] md:h-[440px] flex flex-col justify-start">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Hello, I'm <span className="text-slate-900 dark:text-white">Dorwu-Gabriel</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 flex items-baseline">
          <span className="mr-2">I'm a</span>
          <Typewriter
            phrases={[
              'Software Engineer',
              'AWS Cloud Engineer',
              'IT Technical Support Engineer',
              'CyberSecurity Enthusiast',
              'Linux & Windows Server Administrator',
              'UI/UX Designer & Graphics Designer',
            ]}
          />
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link to="/projects" className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-orange-500 text-white hover:bg-orange-600">View My Work</Link>
          
          <div className="flex items-center gap-3 ml-2">
            {/* GitHub */}
            <a
              href="https://github.com/Dorwu-Gabriel"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/233243849560"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.17 0 6.155 1.237 8.4 3.483a11.8 11.8 0 013.49 8.4c-.003 6.654-5.284 11.936-11.94 11.936a11.9 11.9 0 01-6.003-1.62L.057 24zm6.597-3.807c1.735 1.033 3.276 1.674 5.392 1.675 5.448 0 9.886-4.434 9.889-9.878.002-5.462-4.415-9.89-9.881-9.893-5.452 0-9.887 4.434-9.889 9.881a9.84 9.84 0 001.77 5.574l-.999 3.648 3.718-.997zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dorwu-gabriel-6b34701a3/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right card - image */}
      <div className="relative">
        <div className="rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden p-2 h-[360px] md:h-[440px]">
          <img
            src="/my-profile-img.png"
            alt="Portrait"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <span className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-teal-500/10" />
      </div>
    </section>

    {/* About section */}
    <section id="about" className="mt-28 md:mt-48">
      <About />
    </section>

    {/* Services section */}
    <section id="services" className="mt-28 md:mt-48">
      <Services />
    </section>

    {/* Projects section */}
    <section id="projects" className="mt-28 md:mt-48">
      <Projects />
    </section>

    {/* Contact section */}
    <section id="contact" className="mt-16 md:mt-24">
      <Contact />
    </section>
    </>
  )
}

function Typewriter({ phrases, typingSpeed = 60, pauseMs = 900 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    let timeout

    if (!deleting) {
      // typing
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else {
      // deleting
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 2)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases, typingSpeed, pauseMs])

  return (
    <span className="whitespace-nowrap">
      {text}
      <span className="ml-1 inline-block w-px h-6 bg-current align-middle animate-pulse" />
    </span>
  )
}
