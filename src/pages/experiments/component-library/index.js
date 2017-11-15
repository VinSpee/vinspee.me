import React from 'react';
import path from 'ramda/src/path';
import Helmet from 'react-helmet';
import PageTitle from 'components/page-title';

const ComponentLibrary = ({ data }) => {
  const siteTitle = path(['site', 'siteMetadata', 'title'])(data);
  // const posts = pathOr([])(['allMarkdownRemark', 'edges'])(data);
  const title = `How this site was made`;
  return (
    <div>
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
      dis a comp lib
    </div>
  );
};

export default ComponentLibrary;

export const pageQuery = graphql`
  query ComponentLibraryQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

export const title = 'How This Site Was Made: Creating a Component Library';
export const date = '2017-11-15T12:52:09.490Z';
export const excerpt = 'See how this site was composed by exploring the components used to construct it.';
