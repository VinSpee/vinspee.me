import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import ScriptsBlock from "ScriptsBlock"
import "tachyons/src/tachyons.css"
import "suitcss-depth/index.css"
import "app/index.css"

import Header from "Header"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div className="serif bg-white vh-100 f4 df flxcol oh">
        <Helmet
          meta={ [
            { property: "og:site_name", content: pkg.name },
            { name: "twitter:site", content: `@${ pkg.twitter }` },
          ] }
        />
        <Header />
        <div className="ph3 mt4 mw7 mha">
          { this.props.children }
        </div>
        <ScriptsBlock />
      </div>
    )
  }
}
