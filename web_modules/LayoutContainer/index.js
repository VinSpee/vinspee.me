import React, { Component } from 'react';
import { PropTypes } from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';

import './index.css';

export default class Layout extends Component {

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.object,
		]),
	};

	static contextTypes = {
		metadata: PropTypes.object.isRequired,
	};

	render() {
		try {
			window.Typekit.load();
		} catch (e) {
			console.log(e);
		}

		const { pkg } = this.context.metadata;

		return (
		<div>
			<Helmet
				meta={ [
					{ property: 'og:site_name', content: pkg.name },
					{ name: 'twitter:site', content: `@${ pkg.twitter }` },
				] }
			/>
			<Header />
			<div>
				{ this.props.children }
			</div>
			<Footer />
			<script src="//use.typekit.net/apc4qof.js"></script>
		</div>
	);
	}
}
