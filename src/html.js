import React from 'react';
import theme from 'atomicCSSConfig';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../static/main.css`);
    stylesStr += require(`!raw-loader!./components/reset.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
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
              `
            }}
          />
        </head>
        <body
          style={{
            margin: 0,
          }}
          {...this.props.bodyAttributes}
        >
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
