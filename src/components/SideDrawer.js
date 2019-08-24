import React from "react"
import { Link } from "react-scroll"
import "./SideDrawer.css"
const sideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            spy={true}
            smooth={true}
            to="about"
            activeClassName="selected"
            onClick={props.click}
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
            onClick={props.click}
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
            to="resources"
            onClick={props.click}
            activeClassName="selected"
          >
            Resources
          </Link>
        </li>
        <li>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            spy={true}
            smooth={true}
            onClick={props.click}
            to="contact"
            activeClassName="selected"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default sideDrawer
