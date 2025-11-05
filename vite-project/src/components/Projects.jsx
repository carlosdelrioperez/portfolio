export default function Projects() {
  const proyectos = [
    {
      titulo: "Centro Óptico Cabildo",
      descripcion:
        "Mi Trabajo de Fin de Grado, donde desarrollé una aplicación web de gestión de inventario para una óptica real. Además de poder pedir citas o comprar con Stripe.",
      imagen: "/images/project1.jpg",
    },
    {
      titulo: "Portfolio Personal",
      descripcion: "Este mismo portfolio, creado con React + Tailwind CSS.",
      imagen: "/images/portfolio.PNG",
    },
    {
      titulo: "MyFilms",
      descripcion:
        "API REST construida con Spring Boot que permite CRUD completo de productos, validaciones y documentación con Swagger.",
      imagen: "/images/project3.jpg",
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
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-neutral-700"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {proyecto.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
