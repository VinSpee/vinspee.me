import React from 'react';
import Link from 'gatsby-link';
import pathOr from 'ramda/src/pathOr';
import compose from 'ramda/src/compose';
import dateFormat from  'dateformat';
import map from 'ramda/src/map';
import path from 'ramda/src/path';
import Helmet from 'react-helmet';
import PageTitle from 'components/page-title';

const ExperimentIndex = ({ data }) => {
  const siteTitle = path(['site', 'siteMetadata', 'title'])(data);
  // const posts = pathOr([])(['allMarkdownRemark', 'edges'])(data);
  const title = `I’ve been playing with these things lately`;
  const paths = data.allSitePage.edges.map(edge => ({
    file: edge.node.path.replace(/\/experiments/, '.'),
    url: edge.node.path,
  }));

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
        {paths.map(({ file, url }) => {
          const name = (/\.\/([\w-]*)\//.exec(file)[1]).replace('-', ' ');
          const {
            title,
            date,
            excerpt,
          } = require(`${file}index.js`);

          const formattedDate = dateFormat(new Date(date), 'mmm dd, yyyy');
          return (
            <li
              key={file}
            >
              <Link
                to={url}
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
                    <span
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
                          className="
                            Td(n)
                          "
                        >
                          {title}
                        </span>
                      </h2>
                    </span>
                    <small
                      className="
                        Tt(u)
                        Fz(s-2)
                        D(ib)
                        W(100%)
                      "
                    >
                      {formattedDate}
                    </small>
                  </div>
                  <div>
                    <p
                      className="My(0)"
                    >
                      {excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

ExperimentIndex.propTypes = {
  route: React.PropTypes.object,
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
    allSitePage(
    filter: { id: { regex: "/SitePage \/experiments\/.*\//" } },
    ) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`;
