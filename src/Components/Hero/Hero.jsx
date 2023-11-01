import Banner from "./Banner"
import Category from "./Category"
import './Hero.css';
const Hero = () => {
  return (
    <div className="Hero">
        <Category/>
        <Banner/>
    </div>
  )
}

export default Hero