import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import SearchResults from "./Pages/SearchResults/SearchResults";
import ProductDetails from "./Pages/ProductDetail.jsx/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";

function App() {
  
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
     
        <Routes>
          <>
            {/* Users */}
            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />}  />
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/search" element={<SearchResults />} />
            <Route exact path="/item/:id" element={<ProductDetails />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/blog" element={<Blog />} />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
