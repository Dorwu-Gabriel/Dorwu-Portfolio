export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800 mt-16">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="opacity-70">Created by</span>
          <a href="https://github.com/Dorwu-Gabriel" target="_blank" rel="noreferrer" className="hover:text-slate-800 dark:hover:text-slate-200 font-semibold text-teal-600">Dorwu-Gabriel</a>
        </div>
        <nav className="flex items-center gap-5 text-slate-600 dark:text-slate-300">
          {/* WhatsApp */}
          <a
            href="https://wa.me/233243849560"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-600 transition"
            title="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.17 0 6.155 1.237 8.4 3.483a11.8 11.8 0 013.49 8.4c-.003 6.654-5.284 11.936-11.94 11.936a11.9 11.9 0 01-6.003-1.62L.057 24zm6.597-3.807c1.735 1.033 3.276 1.674 5.392 1.675 5.448 0 9.886-4.434 9.889-9.878.002-5.462-4.415-9.89-9.881-9.893-5.452 0-9.887 4.434-9.889 9.881a9.84 9.84 0 001.77 5.574l-.999 3.648 3.718-.997zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Dorwu-Gabriel"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition"
            title="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.424 2.865 8.178 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.027 1.595 1.027 2.688 0 3.848-2.339 4.697-4.566 4.944.359.31.678.923.678 1.86 0 1.343-.012 2.425-.012 2.754 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dorwu-gabriel-6b34701a3/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 11-.002-4.124 2.062 2.062 0 01.002 4.124zM6.96 20.452H3.713V9H6.96v11.452z"/>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  )
}
