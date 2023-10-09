import { useState } from "react";
import { AiOutlineMail, AiOutlineMan, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
const Contact = () => {
  const isUser = useSelector((state) => state.user.isLoggedIn);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendContact = (e) => {
    e.preventDefault();

  };
  return (
    <div className="Contact" id="Contact">
      <div className="box-1">
        <div className="details">
          <div className="description">
            <h4>Contact Us</h4>
            <div className="line"></div>
            <p>Reach out to us for any inquiry</p>
          </div>

          <form onSubmit={sendContact}>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Full Name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {isUser ? (
              <p className={isUser? 'error ': 'hide'}>An Error Occured</p>
            ) : (
              <p className="success">Successful</p>
            )}

            <input type="submit" className="input" id="Submit" value="Submit" />
          </form>
        </div>
        <div className="map">
          <div className="container">
           
            <iframe className="image" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86456.63205566278!2d8.454334579776493!3d47.3774121753716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1694243322289!5m2!1sen!2sng" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="contact-box"></div>
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="container">
          <CiLocationOn className="icons" />
          <div className="text">
            <h4>Locations</h4>
            <address>64 Exco Street, Dubai</address>
          </div>
        </div>
        <div className="container">
          <AiOutlinePhone className="icons" />
          <div className="text">
            <h4>Phone</h4>
            <p>+234 - 808 - 586 - 9312</p>
          </div>
        </div>
        <div className="container">
          <AiOutlineMail className="icons" />
          <div className="text">
            <h4>Email</h4>
            <address>davidsylvesterita@gmail.com</address>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
