import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { AiOutlineFacebook, AiOutlineGooglePlus } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Backend_URL } from "../../server";
import Cookies from 'js-cookie';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${Backend_URL}/login`, {
        username,
        password,
      });
      const res = result.data;
     
      if (res.status === "ok" && res.success === true) {
        toast.success(`${res.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        Cookies.set('user_flixcart_Id', res.token )
        console.log('Login succesful')
        navigate('/')
      } else {
        toast.error (`${res.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        console.log('Login not succesful')
      }
    } catch (error) {
        toast.error(`No Internet Connection`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }); 
        console.log(error)
    }
  };
  return (
    <div className="Authentication">
      <div className="Auth-container">
        <h4 className="heading">Log In</h4>
        <p className="text">
          Don't have an account?
          <Link className="auth-link" to="/register">
            Register
          </Link>
        </p>
        <div className="wrapper">
          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="text"
              name=""
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Username"
              id="username"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              name=""
              placeholder="Password"
              id="password"
            />
            <input type="submit" id="form-submit" value="Log In" />
          </form>
          <h4 className="or">Or</h4>
          <div className="auth-ouath">
            <button>
              Sign In via <AiOutlineGooglePlus className="auth-icons" />
            </button>
            <button>
              Sign In via <AiOutlineFacebook className="auth-icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
