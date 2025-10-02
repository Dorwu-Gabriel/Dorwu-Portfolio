export default function Services() {
  const services = [
    {
      title: 'Web Development',
      desc: 'Modern, responsive websites and SPAs built with React, Next.js, and Tailwind CSS.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm1.5.75v1.5h15V6H4.5Zm15 3H4.5v9h15v-9Z" />
        </svg>
      ),
    },
    {
      title: 'Cloud & DevOps',
      desc: 'AWS setup, CI/CD pipelines, and scalable deployments with best practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M6.75 12a5.25 5.25 0 1 1 10.5 0 .75.75 0 0 0 .75.75H19.5a3 3 0 0 1 0 6H6a3.75 3.75 0 1 1 .642-7.446A.75.75 0 0 0 7.5 11.25c0-.169.007-.337.02-.503A5.22 5.22 0 0 1 6.75 12Z" />
        </svg>
      ),
    },
    {
      title: 'IT Support & Security',
      desc: 'Technical support, system hardening, and practical cybersecurity guidance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.25c3.728 0 6.75 3.022 6.75 6.75v1.5a6.75 6.75 0 1 1-13.5 0v-1.5C5.25 5.272 8.272 2.25 12 2.25Zm0 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ),
    },
    {
      title: 'System Administration',
      desc: 'System administration services, including server setup, maintenance, and optimization.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm1.5.75v1.5h15V6H4.5Zm15 3H4.5v9h15v-9Z" />
        </svg>
      ),
    },
    {
      title: 'Network Administration',
      desc: 'Scalable infrastructure setup, automated build and deployment pipelines, and best practices for scalable applications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M6.75 12a5.25 5.25 0 1 1 10.5 0 .75.75 0 0 0 .75.75H19.5a3 3 0 0 1 0 6H6a3.75 3.75 0 1 1 .642-7.446A.75.75 0 0 0 7.5 11.25c0-.169.007-.337.02-.503A5.22 5.22 0 0 1 6.75 12Z" />
        </svg>
      ),
    },
    {
      title: 'Cybersecurity & Penetration Testing',
      desc: 'Penetration testing, vulnerability assessment, and practical cybersecurity guidance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.25c3.728 0 6.75 3.022 6.75 6.75v1.5a6.75 6.75 0 1 1-13.5 0v-1.5C5.25 5.272 8.272 2.25 12 2.25Zm0 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ),
    },
    {
      title: 'Video Production',
      desc: 'Video production services, including editing, production, and post-production.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M6.75 12a5.25 5.25 0 1 1 10.5 0 .75.75 0 0 0 .75.75H19.5a3 3 0 0 1 0 6H6a3.75 3.75 0 1 1 .642-7.446A.75.75 0 0 0 7.5 11.25c0-.169.007-.337.02-.503A5.22 5.22 0 0 1 6.75 12Z" />
        </svg>
      ),
    },
    {
      title: 'Virtual Assistant',
      desc: 'Virtual assistant services, including email management, scheduling, and data entry',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.25c3.728 0 6.75 3.022 6.75 6.75v1.5a6.75 6.75 0 1 1-13.5 0v-1.5C5.25 5.272 8.272 2.25 12 2.25Zm0 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ),
    },
    {
      title: 'SQL Database Management',
      desc: 'Database design, optimization, and management.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm1.5.75v1.5h15V6H4.5Zm15 3H4.5v9h15v-9Z" />
        </svg>
      ),
    }, 
    {
      title: 'UI/UX & Graphics Design',
      desc: 'UI/UX design and graphics design services, including logo design, banner design, and social media design',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.25c3.728 0 6.75 3.022 6.75 6.75v1.5a6.75 6.75 0 1 1-13.5 0v-1.5C5.25 5.272 8.272 2.25 12 2.25Zm0 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ),
    },
    {
      title: 'PC Hardware & Software Setup',
      desc: 'Expert setup of PC hardware and software, including operating system installation, device driver configuration, and software optimization for peak performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm1.5.75v1.5h15V6H4.5Zm15 3H4.5v9h15v-9Z" />
        </svg>
      ),
    }, 
  ]

  return (
    <section className="max-w-8xl mx-auto">
      <div className="rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-10 md:p-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200/70 dark:border-slate-800 p-6 hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
              <div className="h-10 w-10 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-7">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
