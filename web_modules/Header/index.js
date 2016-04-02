import React, { Component } from "react"
import { Link } from "react-router"
import { Link as NavItem } from "Nav"

import SVG from "react-svg-inline"
import logoSVG from "theme/vinspee-logo.svg"

export default class Header extends Component {
  render() {
    return (
      <header className="bg-red u-depth u-depth2">
        <nav className="Grid Grid--alignMiddle Grid-md--fit">
          <div className="Grid-cell">
            <Link
              to="/"
              className="db w100 mw6 mw5-m mt2-m"
            >
              <div className="mv0 w100">
                <SVG
                  component="div"
                  svg={ logoSVG }
                  className="w100 white filled"
                />
              </div>
            </Link>
          </div>
          <div className="Grid-cell mw6-m">
            <ul className="list pl0 white">
              <li className="dib tc w-33">
                <NavItem
                  to="/essays"
                >
                  essays
                </NavItem>
              </li>
              <li className="dib tc w-34">
                <a
                  href="//codepen.io/vinspee"
                  className="bg-hover-darkred db no-underline pv3 ph1"
                >
                  labs
                </a>
              </li>
              <li className="dib tc w-33">
                <NavItem
                  to="/contact"
                >
                  contact
                </NavItem>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
