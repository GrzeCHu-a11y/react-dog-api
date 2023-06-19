import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={style.navLink}>
        Dog List
      </NavLink>
      <NavLink to="/searchDog" className={style.navLink}>
        Search Dog
      </NavLink>
    </nav>
  );
};

export default Navbar;
