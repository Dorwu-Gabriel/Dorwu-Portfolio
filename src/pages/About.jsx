export default function About() {
  const technologies = [
    'Python',
    'JavaScript',
    'HTML5',
    'CSS3',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'MySQL',
    'Git',
    'Figma',
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
      <div className="rounded-2xl shadow-[0_10px_30px_RGBA(0,0,0,0.08)] bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20">
        <div className="space-y-10">
          {/* Profile Section */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="relative -mt-20 sm:mt-0 sm:flex-shrink-0">
                <img
                  className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
                  src="my-profile-img.png"
                  alt="Profile"
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  IT Support Engineer & Software Engineer
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-1">
                  A short introduction and summary.
                </p>
                <p className="mt-4 sm:mt-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed sm:leading-7">
                  Greetings! I'm Dorwu-Gabriel, a Technical Support Engineer and aspiring Software Engineer with a passion for technology, 
                  problem-solving, and innovation. I hold a Bachelor's Degree in Information Technology and have experience in web design, 
                  technical support, Cloud computing, Cybersecurity, Linux & Windows Server Administration, Networking and software development. 
                  My journey in tech has been fueled by a strong desire to learn, grow, and create solutions that make a difference. 
                  When I'm not coding or troubleshooting, I enjoy exploring new technologies, playing the piano, and continuously improving my skills.
                </p>
                <div className="mt-6 flex justify-center sm:justify-start">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-2.5 font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center sm:text-left">
              My <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Skills</span> & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <div className="space-y-5">
                <SkillBar label="React / Next.js" value={95} />
                <SkillBar label="TypeScript" value={90} />
                <SkillBar label="Tailwind CSS" value={96} />
                <SkillBar label="Responsive Design" value={90} />
              </div>
              <div className="space-y-5">
                <SkillBar label="Python" value={92} />
                <SkillBar label="JavaScript" value={90} />
                <SkillBar label="HTML5" value={98} />
                <SkillBar label="CSS3" value={95} />
              </div>
            </div>
            
            {/* Technologies */}
            <div className="mt-10">
              <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
                Technologies & <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Frameworks</span>
              </h4>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-sm sm:text-base">
                {technologies.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  function SkillBar({ label, value }) {
    return (
      <div className="group">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-500 dark:group-hover:text-amber-400 transition-colors">
            {label}
          </span>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {value}%
          </span>
        </div>
        <div className="h-2 sm:h-2.5 rounded-full bg-slate-200/70 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-1000 ease-out"
            style={{ 
              width: '0%',
              animation: `progress-${value} 1.5s ease-out forwards`,
              '--progress': `${value}%`
            }}
          />
        </div>
        <style jsx global>{`
          @keyframes progress-${value} {
            from { width: 0; }
            to { width: var(--progress); }
          }
        `}</style>
      </div>
    )
  }
