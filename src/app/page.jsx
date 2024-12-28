import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Projects from "./components/projects";
import Clients from "./components/clients";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <div className="bg-base-100">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Clients />
        <Contact />
      </div>
    </>
  );
}
