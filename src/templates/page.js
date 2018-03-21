import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import path from 'ramda/src/path';
import PageTitle from 'components/page-title';
import './style.css';

const PageTemplate = ({ data }) => {
	const post = data.markdownRemark;
	const siteTitle = path(['site', 'siteMetadata', 'title'])(data);
	const postTitle = path(['frontmatter', 'title'])(post);

	return (
		<div>
			<Helmet title={`${postTitle} | ${siteTitle}`} />
			<header className="Mb(s3)">
				<PageTitle>
					<h1
						className="
							Fz(100%)
							My(0)
							Fw(300)
						"
					>
						{postTitle}
					</h1>
				</PageTitle>
			</header>
			<div
				className="
					CMS
				"
				dangerouslySetInnerHTML={{
					__html: post.html,
				}}
			/>
		</div>
	);
};

export const pageQuery = graphql`
	query PagesByPath($path: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;

export default PageTemplate;
