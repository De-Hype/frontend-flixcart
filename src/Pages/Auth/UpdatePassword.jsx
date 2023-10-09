import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const UpdatePassword = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleUpdatePassword = (e) =>{
        e.preventDefault()
        
    }
  return (
    <div>
        <form onSubmit={handleUpdatePassword}>
        <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input__field"
          />
          <input type="submit" value="Update Password" className="Auth_submit" />
        </form>
    </div>
  )
}

export default UpdatePassword