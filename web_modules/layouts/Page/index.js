import React, { Component } from 'react'
import { PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import SVG from 'react-svg-inline'

// function pageDescription(text) {
//	 return text
// }

export default class Page extends Component {

	static propTypes = {
		children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
		__filename: PropTypes.string.isRequired,
		__url: PropTypes.string.isRequired,
		head: PropTypes.object.isRequired,
		body: PropTypes.string.isRequired,
	};

	static contextTypes = {
		metadata: PropTypes.object.isRequired,
	};

	getLogo = title => {
		switch (title) {
			case `TED`:
				return (
					<SVG
						className="blank-u-pdAmd"
						component="div"
						fill="currentColor"
						svg={ require('../../../content/assets/TED_wordmark.svg') }
					/>
				)
			case `Bankrate / Quizzle`:
				return (
					<SVG
						className="blank-u-pdAmd Theme-bg--bankrate"
						style={ { color: 'white' } }
						component="div"
						fill="white"
						svg={ require('../../../content/assets/bankrate_wordmark.svg') }
					/>
				)
			case `Organic Inc`:
				return (
					<img
						className="
							u-block
							u-sizeFull
							u-blank-pdAmd
						"
						src={ require('../../../content/assets/organic_logo.png') }
					/>
				)
			case `Bacardi`:
				return (
					<SVG
						className="blank-u-pdAmd"
						component="div"
						fill="currentColor"
						svg={ require('../../../content/assets/bacardi_logo.svg') }
					/>
				)
			case `LevelEleven`:
				return (
					<SVG
						className="blank-u-pdAmd"
						component="div"
						fill="currentColor"
						svg={ require('../../../content/assets/leveleleven_logo.svg') }
					/>
				)
			case `Quicken Loans`:
				return (
					<SVG
						className="blank-u-pdAmd"
						component="div"
						fill="currentColor"
						svg={ require('../../../content/assets/quickenloans_logo.svg') }
					/>
				)
			case `BrandPly`:
				return (
					<SVG
						className="blank-u-pdAmd"
						component="div"
						fill="currentColor"
						svg={ require('../../../content/assets/brandply_wordmark.svg') }
					/>
				)
			case `Curve Detroit`:
				return (
					<SVG
						className="blank-u-pdAmd"
						component="div"
						fill="currentColor"
						svg={ require('../../../content/assets/curve-detroit_logo.svg') }
					/>
				)
			case `Kohler`:
				return (
					<SVG
						className="blank-u-pdAmd"
						component="div"
						fill="currentColor"
						svg={ require('../../../content/assets/kohler_logo.svg') }
					/>
				)
			default:
				return ``
		}
	}

	getList = list =>
		<div>
			{ list.type === 'experience' &&
				<h2
					className="
						blank-Type-size--sm
						Theme-fg--red
						u-inlineBlock
						blank-u-mgBlg
						Border-bottom--md
						Border--subtle
					"
				>
					I've worked with
				</h2>
			}
			<ol className="Grid Grid--withGutter">
				{ list.items.map(item =>
					<li
						className={ `
							${item.type === 'current' ? 'u-sizeFull' : 'u-size1of2'}
							blank-u-mgBlg
							Grid-cell
						` }
						key={ item.title }
					>
						<a
							href={ item.url }
							className="
								u-block
								BrandBug
								u-depth
								u-depth1
							"
						>
							{ this.getLogo(item.title) }
						</a>
					</li>
				) }
			</ol>
		</div>

	render() {
		const { pkg } = this.context.metadata

		const {
			__filename,
			__url,
			head,
			body,
		} = this.props

		invariant(
			typeof head.title === 'string',
			`Your page '${ __filename }' needs a title`
		)

		const metaTitle = head.metaTitle ? head.metaTitle : head.title

		const meta = [
			{ property: 'og:type', content: 'article' },
			{ property: 'og:title', content: metaTitle },
			{ property: 'og:url', content: __url },
			// { property: "og:description", content: pageDescription(body) },
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:title', content: metaTitle },
			{ name: 'twitter:creator', content: `@${ pkg.twitter }` },
			// { name: "twitter:description", content: pageDescription(body) },
		]
		const { list } = head

		return (
			<div>
				<Helmet
					title={ metaTitle }
					meta={ meta }
				/>

				{ head.title &&
					<h1>{ head.title }</h1>
				}
				{ body &&
					<div
						dangerouslySetInnerHTML={ { __html: body } }
						className="blank-u-mgBxl"
					/>
				}
				{ this.props.children }
				{ list &&
					this.getList(list)
				}
			</div>
		)
	}
}
