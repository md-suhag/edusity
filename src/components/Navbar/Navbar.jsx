import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";
import menu_icon from "./../../assets/menu-icon.png";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" />
      <ul className={menu ? "" : "hide-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-260} duration={500}>
            Testimonial
          </Link>
        </li>

        <li>
          <Link
            className="btn "
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img className="menu-icon" src={menu_icon} alt="" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
