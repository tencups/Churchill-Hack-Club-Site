import React from "react"
import hackclublogo from "../hackclublogo.png"
import styles from "./nav.module.css"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <>
      <header>
        <img
          src={hackclublogo}
          width="216"
          height="81"
          className={styles.logo}
        />
        <nav>
          <ul className={styles.nav_links}>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy={true}
                smooth={true}
                to="about"
                activeClassName="selected"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy={true}
                smooth={true}
                to="FAQ"
                activeClassName="selected"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                spy={true}
                smooth={true}
                to="contact"
                activeClassName="selected"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Navbar
