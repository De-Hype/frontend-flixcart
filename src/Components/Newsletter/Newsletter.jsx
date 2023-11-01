import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h4 className="container-headings">Subscribe to our Newsletter</h4>
      <div className="Container">
        <input type="email" name="emal" placeholder="Email" id="newsletter-input" />
        <input type="submit" id="newsletter-btn" value="Subscribe" />
      </div>
    </div>
  );
};

export default Newsletter;
