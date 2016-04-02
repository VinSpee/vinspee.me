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
      <div className="serif bg-white vh-100 f4 df flxcol oh black">
        <Helmet
          meta={ [
            { property: "og:site_name", content: pkg.name },
            { name: "twitter:site", content: `@${ pkg.twitter }` },
            { name: "msapplication-TileColor", content: "#efefef" },
            {
              name: "msapplication-TileImage",
              content: "/ms-icon-144x144.png",
            },
            { name: "theme-color", content: "#efefef" },
          ] }
          link={ [
            {
              rel: "apple-touch-icon",
              sizes: "57x57",
              href: "/apple-icon-57x57.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "60x60",
              href: "/apple-icon-60x60.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "72x72",
              href: "/apple-icon-72x72.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "76x76",
              href: "/apple-icon-76x76.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "114x114",
              href: "/apple-icon-114x114.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "120x120",
              href: "/apple-icon-120x120.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "144x144",
              href: "/apple-icon-144x144.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: "/apple-icon-152x152.png",
            },
            {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/apple-icon-180x180.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: "/android-icon-192x192.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon-32x32.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: "/favicon-96x96.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon-16x16.png",
            },
            {
              rel: "manifest",
              href: "/manifest.json",
            },
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
