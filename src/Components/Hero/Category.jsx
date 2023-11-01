import { useState } from "react";
import { AiOutlineDown, AiOutlineLaptop } from "react-icons/ai";
const Category = () => {
  const [hideCategory, setHideCategory] = useState(true);
  const hideCategoryFunction =() =>{
    setHideCategory(!hideCategory)
  }
  return (
    <div className="Category">
      <div className="top">
        <h4 className="category-name">All Categories</h4>
        <AiOutlineDown
          className="category-icon"
          onClick={hideCategoryFunction}
        />
      </div>
      {hideCategory && (
        <div className="body">
          <div className="wrapper">
            <div className="text-icon">
              <AiOutlineLaptop className="category-icon" />
              <h3 className="category-item-name">Headlights & Lighting</h3>
            </div>
            <span>3</span>
          </div>

          <div className="wrapper">
            <div className="text-icon">
              <AiOutlineLaptop className="category-icon" />
              <h3 className="category-item-name">Tires & Wheels</h3>
            </div>
            <span>3</span>
          </div>

          <div className="wrapper">
            <div className="text-icon">
              <AiOutlineLaptop className="category-icon" />
              <h3 className="category-item-name">Tools & Equipment</h3>
            </div>
            <span>3</span>
          </div>

          <div className="wrapper">
            <div className="text-icon">
              <AiOutlineLaptop className="category-icon" />
              <h3 className="category-item-name">Headlight Bulb</h3>
            </div>
            <span>3</span>
          </div>

          <div className="wrapper">
            <div className="text-icon">
              <AiOutlineLaptop className="category-icon" />
              <h3 className="category-item-name">Batteries</h3>
            </div>
            <span>3</span>
          </div>

          <div className="wrapper">
            <div className="text-icon">
              <AiOutlineLaptop className="category-icon" />
              <h3 className="category-item-name">Engine Oil</h3>
            </div>
            <span>3</span>
          </div>

          <div className="wrapper">
            <div className="text-icon">
              <AiOutlineLaptop className="category-icon" />
              <h3 className="category-item-name">Brake Pads</h3>
            </div>
            <span>3</span>
          </div>

          <div className="wrapper">
            <div className="text-icon">
              <h3 className="category-item-name">New Arrivals</h3>
            </div>
            <span>3</span>
          </div>


        </div>
      )}
    </div>
  );
};

export default Category;
