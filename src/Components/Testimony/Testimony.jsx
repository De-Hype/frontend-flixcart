import image_Three from "../../assets/image_Three.jpg";
import "./Testimony.css";
const Testimony = () => {
  return (
    <div className="Testimony">
      <h4 className="container-headings">Client Testimonials</h4>
      <div className="container">
        <div className="box">
          <img
          src="https://res.cloudinary.com/dfdlbxdqi/image/upload/v1697925427/eCommerce/pexels-andrea-piacquadio-3771813_wzw2pz.jpg"
            alt=""
          />
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In culpa
            quae tempore vitae ratione quis omnis! Veniam, aperiam pariatur
            perferendis beatae numquam magni quo doloremque est ad molestiae
            voluptas perspiciatis!
          </p>
          <h4 className="testimony-name">John Doe</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
