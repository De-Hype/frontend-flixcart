import { AiOutlineStar } from "react-icons/ai";
import styleCar from '../assets/StyleCar.jpg'

const Testimony = () => {
  return (
    <div className="Testimony">
      <h4>Testimony</h4>
      <h5>What Our Clients Say</h5>
      <div className="Container">
        <div className="client-testimony">
          <div className="image"></div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos
              autem aspernatur possimus rerum porro similique dolores eveniet
              nostrum, magnam blanditiis voluptas eius corrupti! Odit aperiam
              molestias ipsum eius recusandae?
            </p>
            <div className="rating">
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
              <AiOutlineStar className="icons" />
            </div>
            <h5>David Hype</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
