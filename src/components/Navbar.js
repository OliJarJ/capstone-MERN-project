import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter } from '@fortawesome/free-solid-svg-icons'
import '../App.css'



const Navbar = () => {

  return (
    <nav id="navbar" className="container-fluid" style={{backgroundColor: '#360568ff', display: 'flex', position:'sticky',}}>
      {/* <div className="container-fluid" style={{backgroundColor: '#360568ff', display: 'flex', position:'sticky',}}> */}
      <div className="row">
   {/*Insert LOGO here*/}
   <div className="brand d-flex" style={{marginTop:''}}>
   <FontAwesomeIcon icon={faOtter} className="text-info my-2 mx-2" style={{fontSize:'x-large',}} />
   
      <h3 className="text-info d-flex mx-2 fw-bold" style={{fontFamily:'Goudy Old Style', marginTop:'1vh'}}>O & A Pet Destination</h3>
      </div>
      </div>
        <Link to="/">
          <h1 className="text-white mx-4 my-4" style={{fontSize: 'medium'}}>Home</h1>
        </Link>
        <Link to="/aboutus">
          <h1 className="text-white mx-4 my-4" style={{fontSize: 'medium'}}>About Us</h1>
        </Link>
        <Link to="/shop">
          <h1 className="text-white mx-4 my-4" style={{fontSize: 'medium'}}>Animal Adoption</h1>
        </Link>
        <Link to="/products">
          <h1 className="text-white mx-4 my-4" style={{fontSize: 'medium'}}>Shop</h1>
        </Link>
        <Link to="/contact">
          <h1 className="text-white mx-4 my-4" style={{fontSize: 'medium'}}>Contact</h1>
        </Link>
       
      {/* </div> */}
    </nav>
  )
}
export default Navbar

