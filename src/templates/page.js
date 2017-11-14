import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import PageTitle from 'components/page-title';

const PageTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <header className="Mb(s3)">
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
          CMS
        "
        dangerouslySetInnerHTML={{
          __html: post.html
        }}
      />
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

