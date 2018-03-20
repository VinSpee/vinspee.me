import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import pathOr from 'ramda/src/pathOr';
import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import path from 'ramda/src/path';
import Helmet from 'react-helmet';
import PageTitle from 'components/page-title';
import IndexTitle from 'components/index-title';

const ExperimentIndex = ({ data }) => {
	const siteTitle = path(['site', 'siteMetadata', 'title'])(data);
	// const posts = pathOr([])(['allMarkdownRemark', 'edges'])(data);
	const title = `I’ve been playing with these things lately`;
	const repos = data.allRepositories.repositories.map(x => x.node);

	return (
		<div className="Mb(3)">
			<Helmet title={`${title} | ${siteTitle}`} />
			<header className="Mb(s3)">
				<PageTitle>
					<h1
						className="
							Fz(100%)
							My(0)
							Fw(300)
						"
					>
						{title}
					</h1>
				</PageTitle>
			</header>
			<ol
				className="
					List(n)
					Pstart(0)
					My(0)
				"
			>
				{repos.map(({ name, url, description, createdAt }) => {
					return (
						<li key={url}>
							<a
								href={url}
								className="
									D(b)
									C(dark)
									Td(n)
								"
							>
								<div
									className="
										Mb(s4)
									"
								>
									<div
										className="
											Mb(s1)
										"
									>
										<IndexTitle>
											<h2
												className="
													Fz(s1)
													Fw(300)
												"
											>
												{name}
											</h2>
										</IndexTitle>
										<small
											className="
												Tt(u)
												Fz(s-2)
												D(ib)
												W(100%)
											"
										>
											{createdAt}
										</small>
									</div>
									<div>
										<p className="My(0)">{description}</p>
									</div>
								</div>
							</a>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

ExperimentIndex.propTypes = {
	route: PropTypes.object,
};

export default ExperimentIndex;

export const pageQuery = graphql`
	query ExperimentIndexQuery {
		site {
			siteMetadata {
				title
				author
			}
		}
		allRepositories(sort: { fields: [createdAt], order: DESC }) {
			repositories: edges {
				node {
					name
					url
					description
					createdAt(formatString: "MMMM DD, YYYY")
				}
			}
		}
	}
`;
