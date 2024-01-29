import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Navbars from "../components/navbar/Navbars";
import Services from "../components/services/Services";

function Home() {
  return (
    <>
      <Navbars />
      <Hero />
      <Services />
      <About/>
    </>
  );
}

export default Home;
