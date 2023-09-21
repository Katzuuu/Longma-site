// components
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Properties from "./components/Properties";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Nav />
      <ImageSection />
      <Properties />
      <Services />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
