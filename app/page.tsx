import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Clients />
        <Team />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
