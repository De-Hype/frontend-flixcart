import {
  AiOutlineAlibaba,
  AiOutlineApple,
  AiOutlineChrome,
  AiOutlineGoogle,
  AiOutlineReddit,
} from "react-icons/ai";

const Partner = () => {
  return (
    <div className="Partner">
        <h2>Our Partners</h2>
      <div className="Partner-Icons">
        <AiOutlineGoogle className="icons" />
        <AiOutlineApple className="icons" />
        <AiOutlineAlibaba className="icons" />
        <AiOutlineReddit className="icons" />
        <AiOutlineChrome className="icons" />
      </div>
    </div>
  );
};

export default Partner;
