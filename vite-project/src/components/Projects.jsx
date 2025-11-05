export default function Projects() {
  const proyectos = [
    {
      titulo: "Centro Óptico Cabildo",
      descripcion:
        "Mi Trabajo de Fin de Grado, donde desarrollé una aplicación web de gestión de inventario para una óptica real. Además de poder pedir citas o comprar con Stripe.",
      imagen: "/images/optica.PNG",
      tecnologias: ["React", "Spring Boot", "MySQL", "Stripe"],
      tipo: ["FullStack"],
    },
    {
      titulo: "Porfolio",
      descripcion: "Este mismo portfolio, creado con React + Tailwind CSS.",
      imagen: "/images/portfolio.PNG",
      tecnologias: ["React", "TailwindCSS"],
      tipo: ["Frontend"],
    },
    {
      titulo: "MyFilms",
      descripcion:
        "Un proyecto propio dedicado a gestionar películas vistas, watchlist o valorarlas.",
      imagen: "/images/inprogress.png",
      tecnologias: ["React", "Spring Boot", "MySQL", "TailwindCSS"],
      tipo: ["FullStack"],
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-950 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.4),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />

      <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-12">
        Proyectos
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-neutral-700"
          >
            <div className="relative">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                {proyecto.tipo}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {proyecto.descripcion}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {proyecto.tecnologias.map((tec, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-100 border border-gray-400 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-all duration-300 shadow-sm"
                  >
                    {tec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
