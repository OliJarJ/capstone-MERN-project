// components/Footer.js

import { Link } from 'react-router-dom';
import '../App.css';


const Footer = () => {

  return (
<footer>
      <div className="container-fluid" style={{backgroundColor:'#360568ff', display:'flex', bottom:'0', position: 'fixed', }}>
        <Link to="/">
          <h1>Careers</h1>
        </Link>
        <Link to="/">
          <h1>Vet Locations</h1>
        </Link>
        <Link to="/">
          <h1>Resources</h1>
        </Link>
        <Link to="/">
          <h1>FAQs</h1>
        </Link>
      </div>
    </footer>
  )
}
export default Footer

