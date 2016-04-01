import React, { Component } from "react"
import { Link } from "react-router"

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
              <Link
                to="/essays"
                className="hover-red bg-hover-black db no-underline pv3 ph1"
              >
                essays
              </Link>
            </li>
            <li className="dib tc w-33">
              <Link
                to="/labs"
                className="db no-underline"
              >
                labs
              </Link>
            </li>
            <li className="dib tc w-33">
              <Link
                to="/contact"
                className="db no-underline"
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
