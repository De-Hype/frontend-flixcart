import FirstHeader from "../../Components/FirstHeader/FirstHeader";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <FirstHeader />
      <Header />
      <div className="AboutUs">
        <h2 className="About_Us_Page">About Us</h2>
        <div className="about-us-body">
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            tempore quam obcaecati, eaque labore, eligendi sequi eius explicabo
            sit et inventore reiciendis? Eos repellat voluptates et nam soluta
            aliquam corrupti.
          </p>
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            tempore quam obcaecati, eaque labore, eligendi sequi eius explicabo
            sit et inventore reiciendis? Eos repellat voluptates et nam soluta
            aliquam corrupti.
          </p>
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            tempore quam obcaecati, eaque labore, eligendi sequi eius explicabo
            sit et inventore reiciendis? Eos repellat voluptates et nam soluta
            aliquam corrupti.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
