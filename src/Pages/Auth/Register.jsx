import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { AiOutlineFacebook, AiOutlineGooglePlus } from "react-icons/ai";
import axios from "axios";
import { Backend_URL } from "../../server";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${Backend_URL}/register`, {
        name, email, username, password
      });
      
      // console.log(result)
      const res = result.data
      if (res.status === 'ok' && res.success === true  ){
        toast.success(`${res.message}, redirecting to login page`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          navigate('/sign-in')
          setName(null)
          setUsername(null);
          setEmail(null);
          setPassword(null);
      } else {
        toast.error(`${res.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    } catch (error) {
      // toast.error('No Internet Connection' ,{
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      //   });
        console.log(error)
    }
  };
  return (
    <div className="Authentication">
      <div className="Auth-container">
        <h4 className="heading">Register</h4>
        <p className="text">
          Already have an account?
          <Link className="auth-link" to="/sign-in">
            Log in
          </Link>
        </p>
        <div className="wrapper">
          <form onSubmit={handleRegister} className="auth-form">
            <input
              type="text"
              name=""
              className="form-input"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              id="name"
            />
            <input
              type="text"
              name=""
              className="form-input"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              id="username"
            />
            <input
              type="email"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name=""
              id="email"
            />
            <input
              type="password"
              className="form-input"
              name=""
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="button"
            />
            <input type="submit" id="form-submit" value="Register" />
          </form>
          <h4 className="or">Or</h4>
          <div className="auth-ouath">
            <button>
              Sign Up via <AiOutlineGooglePlus className="auth-icons" />
            </button>
            <button>
              Sign Up via <AiOutlineFacebook className="auth-icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
