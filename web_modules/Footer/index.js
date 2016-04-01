import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <a
          href="http://moox.io/statinamic/"
        >
          Powered by
          <span>
            {  "<Statinamic />" }
          </span>
        </a>
      </footer>
    )
  }
}
