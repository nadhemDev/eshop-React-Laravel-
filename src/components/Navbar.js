import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
    <nav className="navbar">
        {/* logo */}
<div className="navbar__logo">
<h2>MERN Shop</h2>
</div>


        {/* links */}
<ul className="navbar__links">
<li>
    <Link to ="/cart" className="cart__link">
       <i className="fas fa-shopping-cart"></i>
       <span>
       Cart
        <span className="cartlogo__bagde">0</span>
       </span>
       
    </Link>
</li>
<li>
    <Link to ="/">
      Shop
    </Link>
</li>
</ul>

        <div className="menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
    )
}

export default Navbar
