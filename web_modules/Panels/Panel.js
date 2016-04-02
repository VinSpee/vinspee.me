import React, { PropTypes } from "react"
import SVG from "react-svg-inline"

const Panel = ({ imageURL, label, linkURL }) => (
  <a
    title={ label }
    href={ linkURL }
    className="db mw-100 u-depth u-depth1"
    style={ { backgroundColor: "#ffffff" } }
  >
    <SVG
      component="div"
      svg={ imageURL }
      className="mw-100"
    />
  </a>
)

Panel.propTypes = {
  label: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
}

export default Panel
