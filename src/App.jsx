import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/User/Home";
import Store from "./Pages/User/Store";
import About from './Pages/User/About'
import Blog from "./Pages/User/Blog";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <>
          {/* Users */}
             <Route exact path="/" element={<Home />} />
             <Route exact path="/shop" element={<Store />} />
             <Route exact path="/about" element={<About/>}/> 
             <Route exact path="/blog" element={<Blog />} />
            {/*<Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/policy" element={<Policy />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/notification" element={<Notifications />} />
            <Route exact path="/item/:id" element={<Item />} />
            <Route exact path="/partner" element={<Partner/>}/> */}

            {/* Admin */}
            {/* <Route exact path="/admin/dashboard" element={<Dashboard/>}/>
            <Route exact path="/admin/add-item" element={<AddItem/>}/>
            <Route exact path="/admin/settings" element={<Settings/>}/>  */}
            
           {/* User Not Authenticated  */}
            {/* <Route exact path="/" element={<NotUser />} /> */}
            {/* <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/verify" element={<VerifyOtp />} />
            <Route exact path="/forgot-password" element={<ForgottenPassword />}/>
            <Route exact path="/update-password" element={< UpdatePassword />}/> */}
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
