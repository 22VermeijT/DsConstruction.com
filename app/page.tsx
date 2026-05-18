import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Craftsmanship } from "@/components/Craftsmanship";
import { StormDamage } from "@/components/StormDamage";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <div className="lime-divider" />
        <Services />
        <div className="lime-divider" />
        <Process />
        <div className="lime-divider" />
        <Projects />
        <div className="lime-divider" />
        <Craftsmanship />
        <div className="lime-divider" />
        <StormDamage />
        <div className="lime-divider" />
        <Testimonials />
        <div className="lime-divider" />
        <FAQ />
        <div className="lime-divider" />
        <Contact />
      </main>
      <Footer />

    </>
  );
}
