import about from "../data/about";
import banner from "../assets/aboutBanner.svg";
import "../style/banner.css";
import Collapse from "../components/collapse";

function About() {
  return (
    <div className="about-page">
      <div
        className="banner about"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${banner})`,
        }}
      ></div>
      <section className="collapse-about">
        <Collapse title="Fiabilité" content={about.fiability} />

        <Collapse title="Respect" content={about.respect} />

        <Collapse title="Service" content={about.service} />

        <Collapse title="Responsabilité" content={about.responsability} />
      </section>
    </div>
  );
}
export default About;
