import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="headerStyle" >
        <Link to= "/">
        <h1>Oscarstore</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink to= "categoria/personal" >Personal</NavLink>
                </li>
                <li>
                    <NavLink to="categoria/empresarial" >Empresarial</NavLink>
                </li>
            </ul>
        </nav>
        <img src="/img/shopping-cart.png" alt="cart" />
    </header>
  )
}

export default NavBar