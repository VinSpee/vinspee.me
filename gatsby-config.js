require('dotenv').config({
	path: '.secrets.env',
});

module.exports = {
	siteMetadata: {
		title: 'Vince Speelman',
		author: 'Vince Speelman',
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages/`,
				name: 'pages',
			},
		},
		{
			resolve: `gatsby-source-medium`,
			options: {
				username: '@vinspee',
			},
		},
		{
			resolve: 'gatsby-source-github-gql',
			options: {
				auth: process.env.GITHUB_TOKEN,
				query: `{
					viewer {
						repositories(
							last: 25,
							isFork:false,
							affiliations: OWNER,
						) {
							edges {
								node {
									id
									createdAt
									description
									name
									url
								}
							}
						}
					}
				}`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					/*
					 * {
					 *	 resolve: `gatsby-remark-images`,
					 *	 options: {
					 *		 maxWidth: 590
					 *	 }
					 * },
					 */
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-autolink-headers',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					'gatsby-plugin-resolve-src',
					// 'gatsby-plugin-react-a11y',
					/*
					 * {
					 *	 resolve: "gatsby-remark-custom-classnames",
					 *	 options: {
					 *		 p: 'Pb(s1)',
					 *		 h2: 'C(r)',
					 *	 },
					 * },
					 */
				],
			},
		},
		{
			resolve: `gatsby-plugin-postcss-sass`,
			options: {
				postCssPlugins: [
					require('postcss-cssnext')({
						features: {
							rem: false,
							nesting: true,
						},
					}),
				],
			},
		},
		// `gatsby-transformer-sharp`,
		// `gatsby-plugin-sharp`,
		`gatsby-atomizer-plugin`,
		`@jacobmischka/gatsby-plugin-react-svg`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-react-next`,
		// `gatsby-plugin-preact`,
	],
};
