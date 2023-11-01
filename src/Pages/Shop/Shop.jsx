import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Category from "../../Components/Hero/Category";
import "./Shop.css";
import ShopItems from "./ShopItems";
const Shop = () => {
  return (
    <>
      <Header />
      <div className="Shop">
        <div className="Shop-wrapper">
          <Category />
          <ShopItems />
        </div>
        {/* <div className="paginate">124</div> */}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
