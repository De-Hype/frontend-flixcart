import './ThankYou.css';
const ThankYou = () => {
  return (
    <div className="ThankYou">
        <div className="name-greet">Hello <span>David</span>, thank you for purchasing with us</div>
        <div className="payment-inform">
            We Will Be Adding A Payment Functionality Soon
            {/* Ensure To Make This Place A Yellowish, Or warning sign */}
        </div>
    </div>
  )
}

export default ThankYou