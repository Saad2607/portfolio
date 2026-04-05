import FadeIn from "./components/FadeIn";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Upcoming from "./sections/Upcoming";

function App() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute w-72 h-72 bg-blue-500 opacity-10 blur-3xl rounded-full top-1/3 left-1/3"></div>
      </div>

      <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
        <Navbar />
        <Hero />
        <FadeIn>
          <Projects />
          <Upcoming />
          <Skills />
          <Contact />
        </FadeIn>
      </div>
    </div>
  );
}

export default App;