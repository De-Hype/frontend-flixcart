import { AiOutlinePlus } from "react-icons/ai";

const Filter = () => {
  return (
    <div className="Filter">
      <div className="box-1">
        <div className="filter-top">
          <h4>Categories</h4>
          <AiOutlinePlus className="icons"/>
        </div>
        <div className="dash"></div> 
        {/* Create a dash here */}
        <div className="options">
          <div className="item">
            <input type="checkbox" name="Value" id="" className="check-box" />
            <p>Laptops</p>
          </div>
          <div className="item">
            <input type="checkbox" name="Value" id="" className="check-box"  />
            <p>Phones</p>
          </div>
          <div className="item">
            <input type="checkbox" name="Value" id="" className="check-box"  />
            <p>Power Banks</p>
          </div>
          <div className="item">
            <input type="checkbox" name="Value" id="" className="check-box"  />
            <p>Televisions</p>
          </div>
          <div className="item">
            <input type="checkbox" name="Value" id="" className="check-box"  />
            <p>Televisions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
