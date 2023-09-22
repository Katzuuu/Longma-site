import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
// components
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Properties from "./components/Properties";
import Services from "./components/Services";
import MobileNav from "./components/MobileNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const properties = useRef(null);
  const services = useRef(null);
  const pricing = useRef(null);
  const footer = useRef(null);
  return (
    <>
      <Nav
        setIsOpen={setIsOpen}
        properties={properties}
        services={services}
        pricing={pricing}
        footer={footer}
      />
      <AnimatePresence>
        {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      </AnimatePresence>
      <ImageSection />
      <Properties properties={properties} />
      <Services services={services} />
      <Pricing pricing={pricing} />
      <Footer footer={footer} />
    </>
  );
}

export default App;
