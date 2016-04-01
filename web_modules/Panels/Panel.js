import React, { PropTypes } from "react"
import SVG from "react-svg-inline"

const Panel = ({ imageURL, label, linkURL }) => (
  <a
    title={ label }
    href={ linkURL }
    className="dib mw5 w-100 h5"
    style={ { backgroundColor: "#ffffff" } }
  >
    <SVG
      component="div"
      svg={ imageURL }
      className="w-100"
    />
  </a>
)

Panel.propTypes = {
  label: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
}

export default Panel
