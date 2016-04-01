import React, { PropTypes } from "react"
import { Link } from "react-router"

const NavLink = (props) => (
  <Link
    to={ props.to }
    className="bg-hover-darkred db no-underline pv3 ph1"
  >
    { props.children }
  </Link>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavLink
