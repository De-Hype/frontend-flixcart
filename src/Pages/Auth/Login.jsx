import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Authentication">
      <div className="Authentication-Color"></div>
      <div className="Authentication_center">
        <h4>Login</h4>
        <form onSubmit={HandleLogin}>
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
          <input type="submit" value="Log In" className='input__field' id="Auth_submit" />
        </form>
        <div className="below-form">
          <p>
            <Link className="link" to="/register">Register</Link>
          </p>
          <p>
            <Link className="link" to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
