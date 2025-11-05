export default function Certificaciones() {
  const certificaciones = [
    {
      titulo: "B1 English",
      descripcion:
        "Certificado de Cambridge de aprobación del nivel B1 de inglés.",
      icono: "/images/cambridge.png", // ruta al icono de Cambridge
    },
  ];

  return (
    <section
      id="certificaciones"
      className="relative min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.4),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />

      <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-12 text-center">
        Certificaciones
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certificaciones.map((certificacion, index) => (
          <div
            key={index}
            className="relative bg-gray-100/80 dark:bg-gray-800/70 border border-gray-300/60 dark:border-gray-700/60 shadow-lg backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <div className="p-6 text-justify">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {certificacion.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {certificacion.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
