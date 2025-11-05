export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <div className="absolute inset-0 -z-10 bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <img
        src="/images/IMG-20230717-WA0032.jpg"
        alt="Foto de Carlos del Río Pérez"
        className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg border border-gray-300 dark:border-gray-700"
      />

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="text-neutral-700 dark:text-neutral-300 tracking-tight">
          Carlos del Río Pérez
        </span>
      </h1>
      <h1 className="text-5xl md:text-4xl text-gray-900 dark:text-white mb-4">
        <span className="text-neutral-700 dark:text-neutral-300 tracking-tight">
          Software Developer
        </span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300">
        FullStack React & SpringBoot
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/carlos-del-río-pérez-90932b30b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100 border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-all duration-300 shadow-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-neutral-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zM6.5 8.71A1.74 1.74 0 1 1 6.5 5.23a1.74 1.74 0 0 1 0 3.48zM19 19h-3v-4.9c0-1.17-.02-2.68-1.64-2.68-1.64 0-1.89 1.28-1.89 2.6V19h-3v-9h2.88v1.23h.04c.4-.76 1.36-1.56 2.8-1.56 3 0 3.56 1.97 3.56 4.53V19z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/carlosdelrioperez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100 border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-all duration-300 shadow-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-neutral-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.8 0C17.4 6.2 18.4 6.5 18.4 6.5c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>

        <a
          href="mailto:carlosdelrioperez@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100 border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-all duration-300 shadow-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-neutral-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 12.713l11.985-9.713H.015L12 12.713zm0 2.575L.015 5.5V18.5c0 .828.672 1.5 1.5 1.5h20.97c.828 0 1.5-.672 1.5-1.5V5.5L12 15.288z" />
          </svg>
          Gmail
        </a>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 text-3xl">
        <div className="relative group">
          <i className="devicon-react-original colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            React
          </span>
        </div>
        <div className="relative group">
          <i className="devicon-spring-original colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            SpringBoot
          </span>
        </div>
        <div className="relative group">
          <i className="devicon-nodejs-plain colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            Node.js
          </span>
        </div>
        <div className="relative group">
          <i className="devicon-angularjs-plain colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            Angular
          </span>
        </div>
        <div className="relative group">
          <i className="devicon-java-plain colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            Java
          </span>
        </div>
        <div className="relative group">
          <i className="devicon-javascript-plain colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            JavaScript
          </span>
        </div>
        <div className="relative group">
          <i className="devicon-html5-plain colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            HTML5
          </span>
        </div>
        <div className="relative group">
          <i className="devicon-css3-plain colored hover:scale-110 transition-transform duration-200"></i>
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-2 py-1 rounded">
            CSS3
          </span>
        </div>
      </div>
    </section>
  );
}
