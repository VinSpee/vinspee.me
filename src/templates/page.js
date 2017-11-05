import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import PageTitle from 'components/page-title';

const PageTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div
      className="
        D(f)
        Fld(c)
        Mih(100%)
        Flxg(1)
      "
    >
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <header>
        <PageTitle>
          <h1
            className="
              Fz(100%)
              My(0)
              Fw(300)
            "
          >
            {post.frontmatter.title}
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
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
      </div>
    </div>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

