import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkCards from "@/components/WorkCards";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkCards />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <FAQ />
      <Footer />
    </main>
  );
}
