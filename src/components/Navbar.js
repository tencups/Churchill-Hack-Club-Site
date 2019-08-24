import React from "react"
import hackclublogo from "../hackclublogo.png"
import "./nav.css"
import DrawerToggleButton from "./DrawerToggleButton"
import { Link } from "react-scroll"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
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
        <header className="toolbar">
          <img
            src={hackclublogo}
            width="216"
            height="81"
            className="toolbar__logo"
          />
          <nav className="toolbar__navigation">
            <div
              className={this.state.display ? "open" : ""}
              onClick={this.handleClick}
              className="hamburger"
            >
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>

            <div className="toolbar_navigation-items">
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
                    to="resources"
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
                    to="contact"
                    activeClassName="selected"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
          </nav>
        </header>
      </>
    )
  }
}
export default Navbar
