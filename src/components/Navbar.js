import { Link } from 'react-router-dom';




const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/">
          <h1>About Us</h1>
        </Link>
        <Link to="/">
          <h1>Animal Adoption</h1>
        </Link>
        <Link to="/products">
          <h1>Shop</h1>
        </Link>
        <Link to="/">
          <h1>Contact</h1>
        </Link>
        <Link to="/">
          <h1>Register</h1>
        </Link>
      </div>
    </header>
  )
}
export default Navbar

