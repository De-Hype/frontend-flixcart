import './Category.css';
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import desk from '../../assets/desk.jpg';
const Category = () => {
  return (
    <div className="Category">
      <h3 className="heading">
        Explore by Category
      </h3>
      <div className="Category-main">
        <div className="Category-main-filter">
          <div className="category-search-wrapper">
            <AiOutlineSearch className='icon'/>
            <input type="text" name="" placeholder='Search' id="category-search-input" />
          </div>
          <div className="category-filter-group">
            <p className="category-filter-group-paginate">
              Bedroom
            </p>
            <p className="category-filter-group-paginate">
              Dining Room
            </p>
            <p className="category-filter-group-paginate">
              Meeting Room
            </p>
            <p className="category-filter-group-paginate">
              Workplace
            </p>
            <p className="category-filter-group-paginate">
              Living Room
            </p>
            <p className="category-filter-group-paginate">
              Kitchen
            </p>
            <p className="category-filter-group-paginate">
              Living Space
            </p>
          </div>
          <button>
            All Categories <AiOutlineArrowRight className='icon'/>
          </button>
        </div>
        <div className="Category-main-cartalogue">
          <div className="Category-main-cartalogue_item">
            <img src={desk} alt="" />
          </div>
          <div className="Category-main-cartalogue_item">
            <img src={desk} alt="" />
          </div>
          <div className="Category-main-cartalogue_item">
            <img src={desk} alt="" />
          </div>
          <div className="Category-main-cartalogue_item">
            <img src={desk} alt="" />
          </div>
          <div className="Category-main-cartalogue_item">
            <img src={desk} alt="" />
          </div>
          <div className="Category-main-cartalogue_item">
            <img src={desk} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category