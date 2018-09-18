import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import path from 'ramda/src/path';
import Helmet from 'react-helmet';
import PageTitle from 'components/page-title';
import Library from './library';

const ComponentLibrary = () => (
  <StaticQuery
    query={graphql`
			query ComponentLibraryQuery {
				site {
					siteMetadata {
						title
						author
					}
				}
				allSitePage(
					filter: {
						component: {
							regex: "/^.*/experiments/component-library/(?!(index)|(library)).*$/"
						}
					}
				) {
					edges {
						node {
							id
							path
						}
					}
				}
			}
		`}
  >
    {({ data }) => {
		  const siteTitle = path(['site', 'siteMetadata', 'title'])(data);
		  const title = 'Creating a Component Library';
		  return (
  <div>
    <Helmet title={`${title} | ${siteTitle}`} />
    <header className="Mb(s3)">
      <PageTitle>
        <h1
          className="
                  Fz(100%)
                  My(0)
                  Fw(400)
                "
        >
          {title}
        </h1>
      </PageTitle>
    </header>
    <div>
      <Library components={data.allSitePage.edges} />
    </div>
  </div>
		  );
    }}
  </StaticQuery>
);

export default ComponentLibrary;

export const title = 'How This Site Was Made: Creating a Component Library';
export const date = '2017-11-15T12:52:09.490Z';
export const excerpt =	'See how this site was composed by exploring the components used to construct it.';
