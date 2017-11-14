import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import PageTitle from 'components/page-title';
import './style.css';

const BlogPostTemplate = ({ data }) => {
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
          <p
            className="
              Fz(s-1)
              Mx(4px)
              My(0)
              Fw(100)
              Tt(u)
            "
          >
            {post.frontmatter.date}
          </p>
        </PageTitle>
      </header>
      <main>
        <div
          className="CMS"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
