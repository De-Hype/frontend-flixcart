import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom"

const FeaturedProductTop = () => {
  return (
    <div className="FeaturedProductTop">

        <h4 className="heading">Fearured Products</h4>
      
      <Link className="right-links" to='/shop'>Shop <AiOutlineArrowRight/></Link>
    </div>
  )
}

export default FeaturedProductTop