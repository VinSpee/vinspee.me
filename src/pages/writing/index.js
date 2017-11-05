import React from 'react';
import Link from 'gatsby-link';
import pathOr from 'ramda/src/pathOr';
import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import Helmet from 'react-helmet';
import PageTitle from 'components/page-title';

const WritingIndex = ({ data }) => {
  const posts = pathOr([])(['allMarkdownRemark', 'edges'])(data);
  const title = `I’ve been thinking about these things lately.`;

  return (
    <div>
      <Helmet title={`${title} | Vince Speelman`} />
      <header>
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
          cms
        "
      >
        <div
          className="
            Maw(49rem)
          "
        >
          {map(post => {
            if (post.node.path !== '/404/') {
              const title = compose(
                pathOr(
                  pathOr(
                    'A musing',
                  )(['node', 'path'])(post),
                )(['node', 'frontmatter', 'title'])
              )(post);

              return (
                <div key={post.node.frontmatter.path}>
                  <h3
                    className="
                      T(0)
                      Fw(400)
                    "
                  >
                    <Link to={post.node.frontmatter.path}>
                      {post.node.frontmatter.title}
                    </Link>
                  </h3>
                  <small>{post.node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                </div>
              );
            }
          })(posts)}
        </div>
      </div>
    </div>
  );
}

WritingIndex.propTypes = {
  route: React.PropTypes.object,
};

export default WritingIndex;

export const pageQuery = graphql`
  query WritingIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

