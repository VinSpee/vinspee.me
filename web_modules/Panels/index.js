import React, { PropTypes } from "react"
import Panel from "./Panel"

const Panels = ({ items }) => (
  <ol className="w-70">
    { items.map(({ label, linkURL, imageURL }) => (
      <li className="dib w-50 tc">
        <Panel
          linkURL={ linkURL }
          imageURL={ imageURL }
          label={ label }
        />
      </li>
    )) }
  </ol>
)

Panels.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  })),
}

export default Panels
