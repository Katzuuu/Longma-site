// components
import AboutCompany from "./AboutCompany";
import Contact from "./Contact";
import Socials from "./Socials";

const Footer = ({ footer }: any) => {
  return (
    <footer
      ref={footer}
      className="sm:relative flex flex-col w-full bg-[#333] text-white/95 sm:h-[60%]"
    >
      <div className="pt-20 sm:pl-20 text-center">
        <h2 className="mb-12 text-xl sm:text-4xl font-semibold">
          Potrebujete poradiť v účtovníctve?
          <br />
          Neváhajte nás kontaktovať.
        </h2>
        <Contact />
        <div className="w-[200px] h-[1px] mx-auto sm:mx-0 bg-white/70 mb-4 mt-6" />
        <Socials />
      </div>
      <AboutCompany />
    </footer>
  );
};

export default Footer;
