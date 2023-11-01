import './FeaturedProduct.css';
import FeaturedProductBottom from './FeaturedProductBottom';
import FeaturedProductTop from './FeaturedProductTop';
const FeaturedProduct = () => {
  return (
    <div className="FeaturedProduct">
        <FeaturedProductTop/>
        <FeaturedProductBottom/>
    </div>
  )
}

export default FeaturedProduct