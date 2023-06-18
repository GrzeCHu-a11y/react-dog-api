import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/">Dog List</NavLink>
      <NavLink to="/searchDog">Search Dog</NavLink>
    </nav>
  );
};

export default Navbar;
