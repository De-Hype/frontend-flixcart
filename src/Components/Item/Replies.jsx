import styleCar from "../../assets/StyleCar.jpg";
const Replies = () => {
  return (
    <div className="Replies">
      <div className="wrapper">
        <img src={styleCar} alt="" className="images" />
        <div className="users-engagaement">
          <h3 className="peoples-name">De Hype</h3>
          <p className="peoples-comment">
            This is a really terrible product. I so much regret purchasing this.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <img src={styleCar} alt="" className="images" />
        <div className="users-engagaement">
          <h3 className="peoples-name">Kendra Etim</h3>
          <p className="peoples-comment">
            Sometimes product like this are not worth it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Replies;
