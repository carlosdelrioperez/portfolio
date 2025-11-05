export default function Projects() {
  const proyectos = [
    {
      titulo: "Centro Óptico Cabildo",
      descripcion:
        "Mi Trabajo de Fin de Grado, donde desarrollé una aplicación web de gestión de inventario para una óptica real. Además de poder pedir citas o comprar con Stripe.",
      imagen: "/images/563shots_so.png",
      tecnologias: ["React", "Spring Boot", "MySQL", "Stripe"],
      tipo: ["FullStack"],
    },
    {
      titulo: "Porfolio",
      descripcion: "Este mismo portfolio, creado con React + Tailwind CSS.",
      imagen: "/images/352shots_so.png",
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
      className="relative min-h-screen py-20 px-6 bg-transparent text-center"
    >
      <h2 className="text-4xl font-bold text-neutral-100 mb-12">Proyectos</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-gray-800/70 border border-gray-700/60 shadow-lg backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <div className="relative">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
              />
              <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                {proyecto.tipo}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {proyecto.descripcion}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {proyecto.tecnologias.map((tec, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-100 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-sm"
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
