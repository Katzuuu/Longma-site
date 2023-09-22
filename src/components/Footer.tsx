// components
import AboutCompany from "./AboutCompany";
import Contact from "./Contact";
import Socials from "./Socials";

const Footer = ({ footer }: any) => {
  return (
    <footer
      ref={footer}
      className="relative w-full bg-[#333] text-white/95 h-[60%]"
    >
      <div className="pt-20 pl-20">
        <h2 className="mb-12 text-4xl font-semibold">
          Potrebujete poradiť v účtovníctve?
          <br />
          Neváhajte nás kontaktovať.
        </h2>
        <Contact />
        <div className="w-[200px] h-[1px] bg-white/70 mb-4 mt-6" />
        <Socials />
      </div>
      <AboutCompany />
    </footer>
  );
};

export default Footer;
