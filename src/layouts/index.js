import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import HomeHeader from 'components/home-header';
import Footer from 'components/footer';
import cssReset from '@eaze/css-reset';
import '../../static/main.css';

const Template = ({ children, location, route }) => (
	<div
		className="
			Bgc(r)
			Mih(100vh)
			H(100%)
			Ff(sans)
			Fz(s1)
			C(dark)
			D(f)
			Fld(c)
		"
	>
		<header
			role="masthead"
			className="
				Flxg(0)
				Flxs(0)
				Flxb(a)
			"
		>
			<HomeHeader />
		</header>
		<div
			className="
				Flxg(1)
				D(f)
				Fld(c)
				Bgc(lightl)
				C(darkll)
				Px(s1)
				Lh(1.8)
			"
		>
			<div
				className="
					Mih(100%)
					H(100%)
					Mb(s3)
				"
			>
				{children()}
			</div>
		</div>
		<footer
			role="contentinfo"
			className="
				Bgc(light)
				BdT
				Bdtw(s-6)
				Bdtc(lightd)
				Flxg(0)
				Flxs(0)
				Flxb(a)
			"
		>
			<div
				className="
					Maw(28rem)
				"
			>
				<Footer />
			</div>
		</footer>
	</div>
);

Template.propTypes = {
	children: PropTypes.func,
	location: PropTypes.object,
	route: PropTypes.object,
};

export default Template;
