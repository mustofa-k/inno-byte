import { FaWhatsapp } from "react-icons/fa";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Navbars from "../components/navbar/Navbars";
import Services from "../components/services/Services";
import Team from "../components/team/Team";
import Project from "../components/project/Project";

function Home() {
  const whatsappMessage = encodeURIComponent("Hallo, saya ingin menggunakan jasa pembuatan website.");

  return (
    <>
      <div>
        <Navbars />
        <Hero />
        <Services />
        <About />
        <Team />
        <Project/>
      </div>
      <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 999 }}>
        <a
          href={`https://wa.me/+6281292793863?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 5,
            textDecoration: "none",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaWhatsapp style={{ marginRight: 10, fontSize: 24 }} /> {/* Mengatur ukuran ikon */}
          Hubungi Kami di WhatsApp
        </a>
      </div>
    </>
  );
}

export default Home;
