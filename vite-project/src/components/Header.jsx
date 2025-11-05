import { useEffect, useState } from "react";

const navItems = [
  { title: "Inicio", label: "Inicio", url: "#" },
  { title: "Experiencia", label: "experiencia", url: "#experiencia" },
  { title: "Proyectos", label: "proyectos", url: "#proyectos" },
  { title: "Sobre mí", label: "sobre-mi", url: "#sobre-mi" },
  { title: "Contacto", label: "contacto", url: "mailto:miduga@gmail.com" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, url) => {
    // Si el enlace empieza por "#", hacemos scroll suave
    if (url.startsWith("#")) {
      e.preventDefault();
      const targetId = url.slice(1); // quitar "#"
      if (targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Para enlaces externos (ej: mailto)
      window.location.href = url;
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 flex justify-center mt-2">
      <nav
        id="header-nav"
        className={`flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 items-center transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-gray-200/70 dark:bg-black/30 border border-gray-300 dark:border-gray-700 shadow-lg"
            : ""
        }`}
      >
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer"
            aria-label={link.label}
            href={link.url}
            onClick={(e) => handleClick(e, link.url)}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
