import Image from "next/image";
import Hero from "./components/layouts/Hero";
import About from "./components/layouts/About";
import Services from "./components/layouts/Services";
import Portfolio from "./components/layouts/Portfolio";
import Contact from "./components/layouts/Contact";
import Pricing from "./components/layouts/Pricing";
import Technologies from "./components/layouts/Technologies";
import Process from "./components/layouts/Process";
import Testimonials from "./components/layouts/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Pricing />
      <Process />
      <Testimonials />
      <Contact />

    </div>
  );
}
