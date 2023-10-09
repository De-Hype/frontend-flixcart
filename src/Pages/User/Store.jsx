import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Filter from "../../Components/Shop/Filter";
import Product from "../../Components/Shop/Product";
import HeaderOnShop from "../../Components/Shop/HeaderOnShop";
import ReactPaginate from "react-paginate";

const Store = () => {
  return (
    <>
      <HeaderOnShop />
      <div className="Store-Page">
        <div className="top">
          <div className="upper">
            <Link className="link" to="/">
              Home
            </Link>

            <AiOutlineArrowRight className="icons" />
            <Link className="link" to="/shop">
              Store
            </Link>
          </div>
          <h4 className="explore-product">Explore Our Products</h4>
        </div>
        <div className="container">
          <Filter />
          <Product />
        </div>
        <div className="pagination">
          <ReactPaginate
            nextLabel="next >"
            // onPageChange={handlePageClick}
            pageRangeDisplayed={6}
            pageCount={6}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="react-paginate"
            pageClassName='pages-paginate'
            nextClassName='paginate-next paginate-color'
            previousClassName='paginate-next paginate-color'
            activeClassName='active-paginate'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
