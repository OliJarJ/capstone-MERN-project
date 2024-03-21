import { Link } from 'react-router-dom';




const Navbar = () => {

  return (
    <header>
      <div className="container-fluid" style={{backgroundColor: '#360568ff', display: 'flex',  }}>
        <Link to="/home">
          <h1>Home</h1>
        </Link>
        <Link to="/aboutus">
          <h1>About Us</h1>
        </Link>
        <Link to="/shop">
          <h1>Animal Adoption</h1>
        </Link>
        <Link to="/products">
          <h1>Shop</h1>
        </Link>
        <Link to="/contact">
          <h1>Contact</h1>
        </Link>
       
      </div>
    </header>
  )
}
export default Navbar

