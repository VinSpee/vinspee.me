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
    <div
      className="Mb(s3)"
    >
      <Helmet title={`${title} | Vince Speelman`} />
      <header
        className="Mb(s3)"
      >
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
            if (post.node.path !== '/404/') {
              const title = compose(
                pathOr(
                  pathOr(
                    'A musing',
                  )(['node', 'path'])(post),
                )(['node', 'frontmatter', 'title'])
              )(post);

              return (
                <div
                  key={post.node.frontmatter.path}
                  class="
                    Mb(s3)
                  "
                >
                  <div
                    class="
                      Mb(s1)
                    "
                  >
                    <Link
                      to={post.node.frontmatter.path}
                      className="
                        Bdb(s-6)
                        Bdbc(light)
                        Bdbs(s)
                        C(dark)
                        D(ib)
                        Mstart(ns-6)
                        Px(s-6)
                        Td(n)
                        Tt(u)
                        Trs(allColorFade)
                        C(red):h
                        Bdbc(lightd):h
                      "
                    >
                      <h2
                        className="
                          D(ib)
                          T(0)
                          Fz(s1)
                          Fw(700)
                          Ff(mono)
                          Mb(0)
                        "
                      >
                        <span
                          to={post.node.frontmatter.path}
                          className="
                            Td(n)
                          "
                        >
                          {post.node.frontmatter.title}
                        </span>
                      </h2>
                    </Link>
                    <small
                      className="
                        Tt(u)
                        Fz(s-2)
                        D(ib)
                        W(100%)
                      "
                    >
                      {post.node.frontmatter.date}
                    </small>
                  </div>
                  <p
                    class="
                      My(0)
                    "
                    dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                  />
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
            date(formatString: "MMM DD, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

