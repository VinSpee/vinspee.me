import React from 'react';
import PropTypes from 'prop-types';
import pathOr from 'ramda/src/pathOr';
import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import Helmet from 'react-helmet';
import PageTitle from 'components/page-title';
import IndexTitle from 'components/index-title';

const WritingIndex = ({ data }) => {
	const posts = compose(
		map(x => x.node),
		pathOr([])(['allMediumPost', 'edges'])
	)(data);
	const title = `I’ve been thinking about these things lately.`;

	return (
		<div className="Mb(s3)">
			<Helmet title={`${title} | Vince Speelman`} />
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
			<div
				className="
					Mih(100%)
					Flxg(1)
				"
			>
				<div
					className="
						Maw(49rem)
					"
				>
					{map(post => {
						if (post.path !== '/404/') {
							const title = pathOr(['title'])(post);

							return (
								<div
									key={post.id}
									className="
										Mb(s3)
									"
								>
									<div
										className="
											Mb(s1)
										"
									>
										<a
											href={`https://medium.com/${post.author.username}/${
												post.id
											}`}
										>
											<IndexTitle>
												<h2
													className="
														Fz(s1)
														Fw(300)
													"
												>
													{post.title}
												</h2>
											</IndexTitle>
										</a>
										<small
											className="
												Tt(u)
												Fz(s-2)
												D(ib)
												W(100%)
											"
										>
											{post.firstPublishedAt}
										</small>
									</div>
									<p
										className="
											My(0)
										"
									>
										{post.content.subtitle}
									</p>
								</div>
							);
						}
					})(posts)}
				</div>
			</div>
		</div>
	);
};

WritingIndex.propTypes = {
	route: PropTypes.object,
};

export default WritingIndex;

export const pageQuery = graphql`
	query WritingIndexQuery {
		allMediumPost(sort: { fields: [firstPublishedAt], order: DESC }) {
			edges {
				node {
					id
					title
					author {
						username
					}
					content {
						subtitle
					}
					firstPublishedAt(formatString: "MMMM DD, YYYY")
				}
			}
		}
	}
`;
