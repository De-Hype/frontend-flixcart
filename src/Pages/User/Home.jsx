import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Partner from "../../Components/Partner";
import Store from "../../Components/Store";
import Contact from "../../Components/Contact";
import Testimony from "../../Components/Testimony";
import About from "../../Components/About";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <About />
      <Testimony />
      <Store />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
