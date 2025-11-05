export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative flex flex-col items-center justify-center py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-8">Sobre mí</h2>

      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
        ¡Hola! Soy{" "}
        <span className="font-semibold text-white">Carlos del Río</span>,
        Ingeniero de Software y Desarrollador{" "}
        <span className="font-medium">FullStack</span>. Me apasiona crear
        soluciones funcionales y actualmente desarrollo proyectos personales
        para seguir aprendiendo y consolidar mis habilidades en diversas
        tecnologías.
      </p>

      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed mt-4">
        Acabo de finalizar mis estudios y estoy buscando dar mis primeros pasos
        en el sector profesional, incorporándome a un equipo donde pueda seguir
        creciendo, aportar mis conocimientos y contribuir al desarrollo de
        proyectos interesantes.
      </p>

      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed mt-4">
        Me considero una persona curiosa, motivada y comprometida con la calidad
        del software. Siempre busco aprender nuevas tecnologías y mejorar
        continuamente, con el objetivo de crear productos que tengan un impacto
        real.
      </p>
    </section>
  );
}
