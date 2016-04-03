import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import Panels from "Panels"
import TEDLogo from "logos/ted-logo.svg"
import BankrateLogo from "logos/bankrate-logo.svg"
import MyQLLogo from "logos/quicken-loans-logo.svg"
import L11Logo from "logos/leveleleven-logo.svg"
import OrganicLogo from "logos/organic-logo.svg"
import CurveLogo from "logos/curve-logo.svg"
import BacardiLogo from "logos/bacardi-logo.svg"

const workItems = [
  {
    label: "TED",
    linkURL: "http://ted.com",
    imageURL: TEDLogo,
  },
  {
    label: "Bankrate",
    linkURL: "http://www.bankrate.com/funnel/personal-loans/",
    imageURL: BankrateLogo,
  },
  {
    label: "Organic Inc",
    linkURL: "http://www.organic.com/",
    imageURL: OrganicLogo,
  },
  {
    label: "LevelEleven",
    linkURL: "http://www.leveleleven.com/",
    imageURL: L11Logo,
  },
  {
    label: "Bacardi",
    linkURL: "http://www.instantparty.com/",
    imageURL: BacardiLogo,
  },
  {
    label: "Quicken Loans",
    linkURL: "http://www.quickenloans.com/",
    imageURL: MyQLLogo,
  },
  {
    label: "Curve Detroit",
    linkURL: "http://www.curvedetroit.com/",
    imageURL: CurveLogo,
  },
]

export default class IndexLayout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    __filename: PropTypes.string.isRequired,
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    body: PropTypes.string.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    const {
      __filename,
      __url,
      head,
      body,
    } = this.props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div>
        <Helmet
          title={
            `${metaTitle} | Vince Speelman, Front End Developer, Detroit`
          }
          meta={ meta }
        />

        {
          head.title &&
            <header className="mw7 mha">
              <h1 className="sans red">{ head.title }</h1>
            </header>
        }
        {
          body &&
          <div className="mha mw7 mb5">
            <div
              className="content mb6"
              dangerouslySetInnerHTML={ { __html: body } }
            />
            <h2 className="sans red">Brands I've worked with</h2>
            <Panels items={ workItems } />
          </div>
        }
        { this.props.children }
      </div>
    )
  }
}
