import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import sarah from "../../assets/sarah.jpg";

const About = () => {
  return (
    <>
      <Header />
      <div className="About-Page">
        <div className="add-hero-image"></div>
        <div className="contents">
          <h3 className="heading">About Us</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error
            deserunt sint, aut suscipit, eius animi unde ipsa quia totam placeat
            laborum possimus quo rerum dolores nihil facere aperiam nisi!
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error
            deserunt sint, aut suscipit, eius animi unde ipsa quia totam placeat
            laborum possimus quo rerum dolores nihil facere aperiam nisi!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
