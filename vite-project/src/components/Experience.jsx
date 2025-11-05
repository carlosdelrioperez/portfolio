export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative flex flex-col items-center justify-center py-20 px-6 text-left"
    >
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Experiencia Profesional
      </h2>

      <div className="relative border-l border-gray-700 max-w-3xl mx-auto">
        <div className="mb-10 pl-10 relative">
          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-8 ring-gray-900"></div>
          <time className="block mb-1 text-sm font-normal text-gray-400">
            Actualidad
          </time>
          <h3 className="text-lg font-semibold text-white">
            Búsqueda activa de trabajo
          </h3>
          <p className="text-base text-gray-300">
            Busco un puesto que se encaje con mi perfil de Desarrollador Backend
            SpringBoot o FullStack SpringBoot & React.
          </p>
        </div>

        <div className="mb-10 pl-10 relative">
          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-gray-900"></div>
          <time className="block mb-1 text-sm font-normal text-gray-400">
            Feb 2024 - Ago 2025
          </time>
          <h3 className="text-lg font-semibold text-white">
            Prácticas de Ingeniería de Software —{" "}
            <span className="text-blue-400">Ayesa</span>
          </h3>
          <p className="text-base text-gray-300">
            Desarrollo de microservicios utilizando Node.js y Angular.
            Mantenimiento y mejora de proyectos existentes.
          </p>
        </div>
      </div>
    </section>
  );
}
