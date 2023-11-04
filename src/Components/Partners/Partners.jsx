import './Partners.css';
import eBay from "../../assets/eBay.png";
import clothing from "../../assets/clothing.png";
import microsoft from "../../assets/microsoft.png";
import yahoo from "../../assets/yahoo.png";
const Partners = () => {
  return (
    <div className="Partners">
      <h4 className="container-headings">Business Partners</h4>
      <p className="container-description">
        Discover the companies that actually believe in our services, and actually partner with us
      </p>
      <div className="container">
        <img src={yahoo} alt="" className='partner-images' />
        <img src={microsoft} alt="" className='partner-images' />
        <img src={eBay} alt="" className='partner-images' />
        <img src={clothing} alt="" className='partner-images' />
      </div>
    </div>
  )
}

export default Partners