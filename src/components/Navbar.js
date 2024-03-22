import { Link } from 'react-router-dom';

import { FaCat } from "react-icons/fa6";

const Navbar = () => {

  return (
    <header>
      <div className="container-fluid" style={{backgroundColor: '#360568ff', display: 'flex', position:'sticky',}}>
      <div>
      <FaCat className="text-info" style={{fontSize:'large'}}/>
      </div>
        <Link to="/home">
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
       
      </div>
    </header>
  )
}
export default Navbar

