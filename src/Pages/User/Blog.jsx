
import Header from '../../Component/Header/Header';
import styleCar from '../../assets/StyleCar.jpg'

const Blog = () => {
  return (
    <>
      <Header/>
      <div className="Blog">
        <div className="heading">Our Blog</div>
        <div className="Blog-Container">
          <div className="Blog-content">
            <div className="box">
              <img src={styleCar} alt="" className="blog-image" />
              <div className="blog-details">
                <h4>How To Use The Hyper Energy Bank</h4>
                <h5>By <span className="author">Refill</span></h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam atque, laboriosam sunt corrupti minus tenetur, natus
                  corporis nobis sequi architecto nihil tempore inventore ut
                  reprehenderit consequuntur, asperiores laborum! Mollitia,
                  earum...
                </p>
                <button type="submit" className="submit-btn">Read More</button>
              </div>
            </div>

            <div className="box">
              <img src={styleCar} alt="" className="blog-image" />
              <div className="blog-details">
                <h4>How To Use The Hyper Energy Bank</h4>
                <h5>By <span className="author">Refill</span></h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam atque, laboriosam sunt corrupti minus tenetur, natus
                  corporis nobis sequi architecto nihil tempore inventore ut
                  reprehenderit consequuntur, asperiores laborum! Mollitia,
                  earum...
                </p>
                <button type="submit" className="submit-btn">Read More</button>
              </div>
            </div>

            <div className="box">
              <img src={styleCar} alt="" className="blog-image" />
              <div className="blog-details">
                <h4>How To Use The Hyper Energy Bank</h4>
                <h5>By <span className="author">Refill</span></h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam atque, laboriosam sunt corrupti minus tenetur, natus
                  corporis nobis sequi architecto nihil tempore inventore ut
                  reprehenderit consequuntur, asperiores laborum! Mollitia,
                  earum...
                </p>
                <button type="submit" className="submit-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
