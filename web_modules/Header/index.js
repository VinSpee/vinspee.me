import React, { Component } from 'react';
import { Link } from 'react-router';

import SVG from 'react-svg-inline';
import vinspeeSVG from '../icons/vinspee-logo.svg';

export default class Header extends Component {

	render() {
		return (
			<header className="u-textCenter Theme-bg--red">
				<nav>
					<div>
						<Link to="/">
							<SVG fill="#efefef" svg={ vinspeeSVG } />
						</Link>
					</div>
					<ul
						className="
							blank-Type-size--xs
							Grid
							Grid--fit
							Nav
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
						<li className="Grid-cell">
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
						<li className="Grid-cell">
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
						<li className="Grid-cell">
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
		);
	}
}
