import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgottenPassword from "./Pages/Auth/ForgottenPassword";
import Login from "./Pages/Auth/Login";
import NotUser from "./Pages/Auth/NotUser";
import Register from "./Pages/Auth/Register";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import VerifyOtp from "./Pages/Auth/VerifyOtp";
import Blog from "./Pages/User/Blog";
import Cart from "./Pages/User/Cart";
import Faq from "./Pages/User/Faq";
import Home from "./Pages/User/Home";
import Item from "./Pages/User/Item";
import MyAccount from "./Pages/User/MyAccount";
import Notifications from "./Pages/User/Notifications";
import Policy from "./Pages/User/Policy";
import Store from "./Pages/User/Store";
import Dashboard from "./Pages/Admin/Dashboard";
import AddItem from "./Pages/Admin/AddItem";
import Settings from "./Pages/Admin/Settings";
import Partner from "./Pages/User/Partner";
import About from "./Pages/User/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <>
          {/* Users */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Store />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/policy" element={<Policy />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/notification" element={<Notifications />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/item/:id" element={<Item />} />
            <Route exact path="/partner" element={<Partner/>}/>
            <Route exact path="/about" element={<About/>}/>

            {/* Admin */}
            <Route exact path="/admin/dashboard" element={<Dashboard/>}/>
            <Route exact path="/admin/add-item" element={<AddItem/>}/>
            <Route exact path="/admin/settings" element={<Settings/>}/>
            
           {/* User Not Authenticated  */}
            {/* <Route exact path="/" element={<NotUser />} /> */}
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/verify" element={<VerifyOtp />} />
            <Route exact path="/forgot-password" element={<ForgottenPassword />}/>
            <Route exact path="/update-password" element={< UpdatePassword />}/>
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
