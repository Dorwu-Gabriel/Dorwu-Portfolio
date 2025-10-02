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
    <section className="max-w-8xl mx-auto">
      <div className="rounded-2xl shadow-[0_10px_30px_RGBA(0,0,0,0.08)] bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-10 md:p-12">
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-4">
              <img
                className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover mt-[-150px] border border-white dark:border-slate-500 border-3"
                src="my-profile-img.png"
                alt="Profile"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">IT Support Engineer & Software Engineer</h2>
                <p className="text-slate-500 text-base">A short introduction and summary.</p>
                <p className="mt-5 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-8">
                  Greetings! I'm Dorwu-Gabriel, a Technical Support Engineer and aspiring Software Engineer with a passion for technology, 
                  problem-solving, and innovation. I hold a Bachelor’s Degree in Information Technology and have experience in web design, technical support, Cloud computing, Cybersecurity, Linux & Windows Server Administration, Networking and software development. 
                  My journey in tech has been fueled by a strong desire to learn, grow, and create solutions that make a difference. When I'm not coding or troubleshooting, I enjoy exploring new technologies, playing the piano, and continuously improving my skills.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md px-5 py-2.5 font-medium border border-slate-200/70 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">My Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <SkillBar label="React / Next.js" value={92} />
                <SkillBar label="TypeScript" value={87} />
                <SkillBar label="Tailwind CSS" value={94} />
                <SkillBar label="Responsive Design" value={90} />
              </div>
              <div className="space-y-6">
                <SkillBar label="Python" value={92} />
                <SkillBar label="JavaScript" value={87} />
                <SkillBar label="HTML5" value={98} />
                <SkillBar label="CSS3" value={95} />
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <h4 className="text-lg font-semibold mb-4">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2 text-base">
                {technologies.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800">{t}</span>
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
      <div>
        <div className="flex items-center justify-between mb-1 text-base">
          <span>{label}</span>
          <span className="text-slate-500">{value}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-orange-500 dark:bg-orange-400"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    )
  }
