import React, { Component } from "react"
import SVG from "react-svg-inline"
import twitterSVG from "icons/iconmonstr-twitter-1.svg"
import githubSVG from "icons/iconmonstr-github-1.svg"

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-red white">
        <ul
          className="
            list
            Grid
            Grid--alignMiddle
            Grid--alignCenter
          "
        >
          <li className="dib">
            <a
              className="dib pa3 hover-black"
              title="Follow me on Twitter"
              href="http://twitter.com/vinspee"
            >
              <SVG
                svg={ twitterSVG }
                className="filled"
              />
            </a>
          </li>
          <li className="dib">
            <a
              href="http://github.com/vinspee"
              title="Follow me on Github"
              className="dib pa3 hover-black"
            >
              <SVG
                svg={ githubSVG }
                className="filled"
              />
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}
