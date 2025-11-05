import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fontsource/onest";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Certificaciones from "./components/Certifications";

export default function App() {
  return (
    <div className="relative text-white font-sans min-h-screen flex flex-col">
      <div className="absolute top-0 bottom-0 z-[-2] w-full min-h-screen bg-gray-950 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(120,119,198,0.3),rgba(70,20,50,0.4))]"></div>

      <Header />

      <main className="flex-1">
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </main>

      <Footer />
    </div>
  );
}
