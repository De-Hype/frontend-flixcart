import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
  return (
    <div className="Hero">
      <Header/>
      <div className="Main_Hero">
        <h3 className="hero-main-heading">Exclusive Deals of Furniture Collections</h3>
        <p className="hero-main-paragraph">Explore different categories, find the best deals.</p>
        <button id='Hero-btn' type="submit">Shop Now</button>
      </div>
    </div>
  )
}

export default Hero