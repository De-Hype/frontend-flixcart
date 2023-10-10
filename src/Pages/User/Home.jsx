
import Benefit from "../../Component/Benefits/Benefit";
import Category from "../../Component/Category/Category";
import Hero from "../../Component/Hero/Hero";
import PopularProduct from "../../Component/PopularProduct/PopularProduct";


const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Category/>
      <PopularProduct/>
      <Benefit/>
    </div>
  );
};

export default Home;
