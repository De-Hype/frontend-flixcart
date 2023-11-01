import { Link } from 'react-router-dom'
import './FirstHeader.css'
const FirstHeader = () => {
  return (
    <div className="FirstHeader">
        <div className="left">
            <p>Need Help?Call us <span>(+234 234 589)</span> or <span>iamsocialhype@gmail.com</span></p>
        </div>
        <div className="right">
            <Link className='links' to='/'>My account</Link>
            <Link className='links' to='/'>Order Tracking</Link>
            <Link className='links' to='/'>Wishlist</Link>
        </div>
    </div>
  )
}

export default FirstHeader