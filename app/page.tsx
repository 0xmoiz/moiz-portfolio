import Background from "@/components/background/Background";
import Spotlight from "@/components/background/Spotlight";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/loading/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Background />
      <Spotlight />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}