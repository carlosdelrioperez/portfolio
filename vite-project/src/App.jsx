import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fontsource/onest";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="relative text-black dark:text-white font-sans min-h-screen flex flex-col">
      <div
        className="absolute top-0 bottom-0 z-[-2] w-full min-h-screen
          bg-gray-50 dark:bg-gray-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
          dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>

      <Header />

      <main className="flex-1">
        <Hero></Hero>
        <Experience></Experience>
        <Projects></Projects>
      </main>

      <Footer />
    </div>
  );
}
