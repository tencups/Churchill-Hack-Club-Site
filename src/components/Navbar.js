import React from "react"
import hackclublogo from "../hackclublogo.png"
import "./nav.css"
import { Link } from "react-scroll"

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      display: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        display: !prevState.display
      }
    })
  }
  render() {
    return (
      <>
        <header>
          <img src={hackclublogo} width="216" height="81" className="logo" />
          <nav>
            <div
              className={this.state.display ? "open" : ""}
              onClick={this.handleClick}
              className="hamburger"
            >
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
            <ul className="nav_links">
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
}
export default Navbar
