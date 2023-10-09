import Comment from "./Comment";
import Replies from "./Replies";

const Reviews = () => {
  return (
    <div className="Reviews">
      <h3 className="sub-heading-reviews">Reviews</h3>
      {/* <div className="reviews-exist">
        <Replies />
        <Comment />
      </div> */}
      <h4 className="no-reviews-exist">No Reviews Available</h4>
    </div>
  );
};

export default Reviews;
