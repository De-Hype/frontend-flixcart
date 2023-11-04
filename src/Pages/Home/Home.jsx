import Blog from "../../Components/Blog/Blog"
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct"
import FirstHeader from "../../Components/FirstHeader/FirstHeader"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import Newsletter from "../../Components/Newsletter/Newsletter";
import Partners from "../../Components/Partners/Partners";
import Testimony from "../../Components/Testimony/Testimony";

const Home = () => {
  return (
    <div className="Home">
        <FirstHeader/>
        <Header/>
        <Hero/>
        {/* <FeaturedProduct/> */}
        <Testimony/>
        <Partners/>
        <Blog/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home