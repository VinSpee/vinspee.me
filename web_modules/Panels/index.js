import React, { PropTypes } from "react"
import Panel from "./Panel"
import "suitcss-components-grid/index.css"

const Panels = ({ items }) => (
  <ol
    className="
      Grid
      Grid
      Grid--withGutter
      Grid--alignCenter
    "
  >
    { items.map(({ label, linkURL, imageURL }) => (
      <li
        key={ label }
        className="Grid-cell mw5-ns tc mv2"
      >
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
