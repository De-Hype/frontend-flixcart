import { AiOutlineSend } from "react-icons/ai"

const Comment = () => {
  return (
    <div className="Comment">
        <input type="text" name="comment" id="comment" placeholder="Comments..." />
        <AiOutlineSend className="icon"/>
    </div>
  )
}

export default Comment