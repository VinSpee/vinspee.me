import React, { Component } from 'react'
import { Link } from 'react-router'

import SVG from 'react-svg-inline'
import vinspeeSVG from '../icons/vinspee-logo.svg'

export default class Header extends Component {

	render() {
		return (
			<header
				className="
					u-textCenter
					Theme-fg--white
					Theme-bg--red
					u-depth
					u-depth1
					Nav
				"
				role="navigation"
			>
				<nav className="Grid Grid--alignMiddle">
					<Link
						className="
							Grid-cell
							u-sm-size2of4
							u-md-size5of12
							u-lg-size3of12
						"
						to="/"
					>
						<SVG
							component="div"
							fill="currentColor"
							svg={ vinspeeSVG }
						/>
					</Link>
					<ul
						className="
							blank-Type-size--xs
							Grid-cell
							u-sm-sizeFill
							u-md-size1of6
							Grid
							Grid--fit
						"
					>
						<li
							className="
								Grid-cell
							"
						>
							<Link
								className="
									Nav-action
									u-flex
									u-flexJustifyCenter
									Border
									Border-right
									Border-color--light
									Border-weight--xs
									blank-u-pdVmd
								"
								to="/"
							>{ "essays" }</Link>
						</li>
						<li
							className="
								Grid-cell
							"
						>
							<Link
								className="
									Nav-action
									u-flex
									u-flexJustifyCenter
									Border
									Border-right
									Border-color--light
									Border-weight--xs
									blank-u-pdVmd
								"
								to="/"
							>{ "about" }</Link>
						</li>
						<li
							className="
								Grid-cell
							"
						>
							<Link
								className="
									Nav-action
									u-flex
									u-flexJustifyCenter
									Border
									Border-right
									Border-color--light
									Border-weight--xs
									blank-u-pdVmd
								"
								to="/"
							>{ "labs" }</Link>
						</li>
						<li
							className="
								Grid-cell
							"
						>
							<Link
								className="
									Nav-action
									u-flex
									u-flexJustifyCenter
									blank-u-pdVmd
								"
								to="/"
							>{ "talk" }</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
