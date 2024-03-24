import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Adjusted imports to align with body content
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check screen size initially
    window.addEventListener('resize', handleResize); // Add event listener for screen resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav id="navbar" className="container-fluid" style={{ backgroundColor: '#360568ff', display: 'flex', position: 'sticky', top: 0, zIndex: 1000 }}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="bi bi-list"></i></span>

                </button>
      <div className="row">
        <div className="brand d-flex" style={{ marginTop: '' }}>
          <FontAwesomeIcon icon={faOtter} className="text-white my-2 mx-2" style={{ fontSize: 'xx-large' }} />
          <h3 className="text-white d-flex mx-2 fw-bold" style={{ fontFamily: 'Goudy Old Style', marginTop: '1vh',  }}>O & A Pet Destination</h3>
        </div>
        {isLargeScreen ? ( // Display navlinks on larger screens
          <div className="navlinks">
            <Link to="/">
              <h1 className="text-white mx-4 my-4" style={{ fontSize: 'medium' }}>Home</h1>
            </Link>
            <Link to="/aboutus">
              <h1 className="text-white mx-4 my-4" style={{ fontSize: 'medium' }}>About Us</h1>
            </Link>
            <Link to="/shop">
              <h1 className="text-white mx-4 my-4" style={{ fontSize: 'medium' }}>Adoption</h1>
            </Link>
            <Link to="/products">
              <h1 className="text-white mx-4 my-4" style={{ fontSize: 'medium' }}>Shop</h1>
            </Link>
            <Link to="/contact">
              <h1 className="text-white mx-4 my-4" style={{ fontSize: 'medium' }}>Contact</h1>
            </Link>
          </div>
        ) : (


          // Display menu toggle icon on smaller screens
          <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-white my-4 mx-2" style={{ fontSize: 'large', cursor: 'pointer' }} />
          </div>
        )}
      </div>

    
      {!isLargeScreen && (
        <div className={`menu-items ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-black mx-4 my-4" style={{ fontSize: 'medium' }}>Home</h1>
          </Link>
          <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-black mx-4 my-4" style={{ fontSize: 'medium' }}>About Us</h1>
          </Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-black mx-4 my-4" style={{ fontSize: 'medium' }}>Animal Adoption</h1>
          </Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-black mx-4 my-4" style={{ fontSize: 'medium' }}>Shop</h1>
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-black mx-4 my-4" style={{ fontSize: 'medium' }}>Contact</h1>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;