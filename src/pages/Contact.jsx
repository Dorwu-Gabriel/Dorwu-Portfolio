export default function Contact() {
  return (
    <section className="grid md:grid-cols-2 gap-10">
      <div className="card overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
          alt="Contact visual"
          className="w-full h-full object-cover max-h-[460px]"
        />
      </div>
      <div className="card p-8">
        <h2 className="text-2xl font-extrabold text-center">Get In Touch</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-1">
          Have a question or want to work together? I'd love to hear from you.
        </p>
        <form className="mt-6 grid gap-4">
          <input className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2" placeholder="Your Name" />
          <input className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2" placeholder="Your Email" />
          <input className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2" placeholder="Subject" />
          <div className="relative">
            <textarea 
              rows={5}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2 resize-none overflow-y-auto" 
              placeholder="Your Message"
              style={{
                minHeight: '120px',
                maxHeight: '200px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#f97316 #f3f4f6',
              }}
            />
            <style jsx global>{`
              textarea::-webkit-scrollbar {
                width: 6px;
              }
              textarea::-webkit-scrollbar-track {
                background: #f3f4f6;
                border-radius: 3px;
              }
              textarea::-webkit-scrollbar-thumb {
                background-color: #f97316;
                border-radius: 3px;
              }
              .dark textarea::-webkit-scrollbar-track {
                background: #1e293b;
              }
              .dark textarea::-webkit-scrollbar-thumb {
                background-color: #fb923c;
              }
            `}</style>
          </div>
          <button type="button" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
