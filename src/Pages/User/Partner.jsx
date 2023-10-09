import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
const Partner = () => {
  return (
    <>
    <Header/>
      <div className="Partner-Page">
        <div className="container">
          <h3 className="heading">Partner With Us</h3>
          <form action="" method="post">
            <input type="email" name="email" className='partner-input'  id="email" placeholder='Email...' />
            <input type="text" name="name"  className='partner-input' id="name" placeholder='CEO Name' />
            <input type="text" name="address"  className='partner-input' id="address" placeholder='Address' />
            <input type="password" name="password"  className='partner-input' id="password" placeholder='Password' />
            <input type="submit" value="Join Us" id='submit-btn' className='partner-input'  />
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Partner;
