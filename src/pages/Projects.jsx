const data = [
  { 
    id: 1, 
    title: 'Currency Converter App', 
    img: 'CurrencyApp-Dark-Theme.png',
    liveUrl: 'https://currency-converter-app-57lk.vercel.app/'
  },
  { 
    id: 2, 
    title: 'Recipe Sharing App', 
    img: 'RecipeShare-HomePage.png',
    liveUrl: 'https://recipe-sharing-platform-tau.vercel.app/'
  },
  { 
    id: 3, 
    title: 'ecoprotin', 
    img: 'ecoprotin.png',
    liveUrl: 'https://www.ecoprotin.com/'
  },
  { 
    id: 4, 
    title: 'Minimal Desk Setup', 
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    liveUrl: '#'
  },
  { 
    id: 5, 
    title: 'Media Platform', 
    img: 'https://images.unsplash.com/photo-1489599849930-32a02a34b8c0?q=80&w=1200&auto=format&fit=crop',
    liveUrl: '#'
  },
  { 
    id: 6, 
    title: 'Wearable UI', 
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    liveUrl: '#'
  },
  { 
    id: 7, 
    title: 'Analytics Suite', 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    liveUrl: '#'
  },
  { 
    id: 8, 
    title: 'Mobile Concept', 
    img: 'https://images.unsplash.com/photo-1539889844380-ec39fa19746a?q=80&w=1200&auto=format&fit=crop',
    liveUrl: '#'
  },
  { 
    id: 9, 
    title: 'Food Commerce', 
    img: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop',
    liveUrl: '#'
  },
]

export default function Projects() {
  return (
    <section>
      <header className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">My Creative Work</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">A collection of my recent projects, showcasing skills in web development and design.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p) => (
          <article key={p.id} className="rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-44 md:h-56 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{p.title}</h3>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-white font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition whitespace-nowrap text-sm"
                >
                  View Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
