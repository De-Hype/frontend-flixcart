
const ForgottenPassword = () => {
  const onForgot = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="ForgottenPassword">
      <div className="box">
        <h3 className="title-tag">Forgotten Password</h3>
        <form onSubmit={onForgot} className="fgt-form">
          <input className="input" type="email" name="email" id="email" placeholder="Email" />
          <input className="input" type="submit" value="Forgot Password" id="submit-btn" />
        </form>
      </div>
    </div>
  )
}

export default ForgottenPassword