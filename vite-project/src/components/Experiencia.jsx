export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="relative flex flex-col items-center justify-center py-20 px-6 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_90%_at_50%_-10%,rgba(240,240,255,0.7),rgba(255,255,255,0.95))] dark:bg-[radial-gradient(ellipse_90%_90%_at_50%_-10%,rgba(160,160,200,0.3),rgba(20,20,30,0.9))]" />

      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
        Experiencia Profesional
      </h2>

      <div className="relative border-l border-gray-300 dark:border-gray-700 max-w-3xl mx-auto text-left">
        <div className="mb-10 ml-6">
          <div className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-8 ring-white dark:ring-gray-900"></div>
          <time className="block mb-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Actualidad
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Búsqueda activa de trabajo
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Busco un puesto que se encaje con mi perfil de Desarrollador Backend
            SpringBoot o FullStack SpringBoot & React.
          </p>
        </div>

        <div className="mb-10 ml-6">
          <div className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-900"></div>
          <time className="block mb-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Feb 2024 - Ago 2025
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Prácticas de Ingeniería de Software —{" "}
            <span className="text-blue-600 dark:text-blue-400">Ayesa</span>
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Desarrollo de microservicios utilizando Node.js y Angular.
            Mantenimiento y mejora de proyectos existentes.
          </p>
        </div>
      </div>
    </section>
  );
}
