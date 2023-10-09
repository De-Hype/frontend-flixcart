import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [ceoName, setCeoName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Authentication">
      <div className="Authentication-Color"></div>

      <div className="Authentication_center">
        <h4>Register</h4>
        <form onSubmit={HandleRegister}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            id="first_name"
            onChange={(e) => setName(e.target.value)}
            className="input__field"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            id="last_name"
            onChange={(e) => setCeoName(e.target.value)}
            className="input__field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input__field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input__field"
          />
          <input type="submit" value="Register" className='input__field' id="Auth_submit" />
        </form>
        <div className="below-form">
          <p>
            <Link className="link" to="/login">Log In</Link>
          </p>
          <p>
            <Link className="link" to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
