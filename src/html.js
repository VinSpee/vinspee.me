import React from 'react';
import theme from './atomicCSSConfig';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint-disable */
    stylesStr = require('!raw-loader!../static/main.css');
    stylesStr += require('!raw-loader!./components/reset.css');
    /* eslint-enable */
  } catch (e) {
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .cms p {
                  margin-bottom: 24px;
                }
                .cms a {
                  color: ${theme.configs.custom.rd};
                  text-decoration: underline;
                }
                .cms a:hover {
                  color: ${theme.configs.custom.r};
                }
                .cms code {
                  font-family: 'monospace';
                  background-color: ${theme.configs.custom.light};
                  color: ${theme.configs.custom.darkl};
                  padding-top: calc(${theme.configs.custom['s-6']} / 2);
                  padding-bottom: calc(${theme.configs.custom['s-6']} / 2);
                  padding-left: calc(${theme.configs.custom['s-6']} / 1.5);
                  padding-right: calc(${theme.configs.custom['s-6']} / 1.5);
                }
              `,
            }}
          />
          <style>
            {`
            h1, h2, h3, h4, h5, h6, p {
              margin-top: 0;
              margin-bottom: 0;
            }

            .CMS {
              max-width: 49rem

            }

            .CMS h1,
              .CMS h2,
              .CMS h3,
              .CMS h4,
              .CMS h5,
              .CMS h6 {
              font-size: 1rem;
              font-weight: 300;
            }

            .CMS h2 {
              font-family: InputMonoNarrow ExLight, monospace;
              text-transform: uppercase;
              color: #d2210f;
              font-size: 28px;
              letter-spacing: 1px;
            }

            .CMS h3 {
              display: inline-block;
              font-family: InputMonoNarrow ExLight, monospace;
              text-transform: uppercase;
              color: #161f21;
              background-color: #fafbfb;
              padding-left: 1.25em;
              padding-right: .4em;
              padding-top: .2em;
              padding-bottom: .1em;
              font-size: 21px;
              line-height: 1.3;
              border-bottom: 2px solid #f24432;
              position: relative;
            }

            .CMS h3 .anchor {
              display: block;
              fill: #f24432;
            }

            .CMS h3 .anchor > svg {
              visibility: visible;
            }

            .CMS h4 {
              font-family: InputMonoNarrow ExLight, monospace;
              color: #0f1b1e;
              font-size: 19px;
            }

            .CMS * + * {
              margin-top: 28px !important;
            }

            .CMS p + p {
              margin-top: 0;
              text-indent: 28px !important;
            }

            .CMS li + li {
              margin-top: 0 !important;
            }

            .CMS blockquote {
              font-size: 24px;
              margin: 0px;
              color: #fafbfb;
              background-color: #f24432;
              border-left: solid 8px #a51101;
              padding-left: 16px;
              padding-top: 8px;
              padding-bottom: 8px;
              line-height: 1.5;
              font-style: italic;
              font-family: InputMonoNarrow ExLight, monospace;
            }

            .CMS a:not(.anchor) {
              color: #161f21;
              font-family: InputMonoNarrow ExLight, monospace;
              font-style: italic;
              background-color: #e0e9eb;
              text-decoration: none;
              padding: 4px 8px;
              transition: color .2s ease-in-out, background-color .2s ease-in-out;
            }

            .CMS a:not(.anchor):hover {
              color: #fafbfb;
              background-color: #f24432;
            }

            .CMS ol, .CMS ul {
              margin-bottom: 0;
              padding-left: 12px;
              padding-top: 8px;
              padding-bottom: 8px;
            }

            .CMS ol {
              list-style-type: upper-roman;
            }

            .CMS li {
              display: block;
              font-family: InputMonoNarrow ExLight, monospace;
              margin-bottom: 3px;
              padding-left: 8px;
              box-shadow: -8px 0 0 0 #e0e9eb;
            }

            .CMS li > ul, .CMS li > ol {
              padding-top: 0;
              padding-bottom: 0;
              box-shadow: none;
              padding-left: 0;
              margin-left: 8px;
            }

            .CMS li > ul > li, .CMS li > ol > li {
              margin-left: -8px;
              padding-left: 8px;
              margin-bottom: 3px;
            }

            .CMS code {
              font-family: InputMonoNarrow ExLight, monospace;
              background-color: #e0e9eb;
              color: #161f21;
              padding-left: 4px 5.33333px;
            }
          `}
          </style>
        </head>
        <body
          style={{
            margin: 0,
          }}
          {...this.props.bodyAttributes}
        >
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
