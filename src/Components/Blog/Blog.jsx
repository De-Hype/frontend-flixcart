import "./Blog.css";
import image_Two from "../../assets/image_Two.jpg";
import {
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="Blog">
      <h4 className="container-headings">Latest News and Blogs</h4>
      <div className="container">
        <div className="blog-box">
          <img src={image_Two} alt="" />
          <div className="blog-detail">
            <div className="top">
              <div className="calendar">
                <AiOutlineCalendar className="calendar-icon" />
                <span>27/09/2023</span>
              </div>
              <h4 className="author">
                By <span>Flixcart</span>
              </h4>
            </div>
            <h4 className="blog-title">
              How Our customers are heavily protected
            </h4>
            <p className="blog-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              harum ipsa, quod, ex quisquam enim dignissimos facilis
              architecto...
            </p>
            <Link to="/" className=" blog-read-more">
              Read More <AiOutlineArrowRight />
            </Link>
          </div>
        </div>

        <div className="blog-box">
          <img src={image_Two} alt="" />
          <div className="blog-detail">
            <div className="top">
              <div className="calendar">
                <AiOutlineCalendar className="calendar-icon" />
                <span>27/09/2023</span>
              </div>
              <h4 className="author">
                By <span>Flixcart</span>
              </h4>
            </div>
            <h4 className="blog-title">
              How Our customers are heavily protected
            </h4>
            <p className="blog-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              harum ipsa, quod, ex quisquam enim dignissimos facilis architecto
              quisquam enim dignissimos facilis architecto...
            </p>
            <Link to="/" className=" blog-read-more">
              Read More <AiOutlineArrowRight />
            </Link>
          </div>
        </div>

        <Link to="/" className="blog-view-more">
          View More Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blog;
