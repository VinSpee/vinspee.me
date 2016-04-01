import React, { Component } from "react"
import { Link } from "react-router"
import { Link as NavItem } from "Nav"

import SVG from "react-svg-inline"
import logoSVG from "theme/vinspee-logo.svg"

export default class Header extends Component {
  render() {
    return (
      <header className="bg-red">
        <nav>
          <Link
            to="/"
            className="db w100 mw6"
          >
            <h1 className="mv0 w100">
              <SVG
                component="div"
                svg={ logoSVG }
                className="w100 white filled"
              />
            </h1>
          </Link>
          <div>
          </div>
          <ul className="list pl0 white">
            <li className="dib tc w-33">
              <NavItem
                to="/essays"
              >
                essays
              </NavItem>
            </li>
            <li className="dib tc w-34">
              <NavItem
                to="/labs"
              >
                labs
              </NavItem>
            </li>
            <li className="dib tc w-33">
              <NavItem
                to="/contact"
              >
                contact
              </NavItem>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
