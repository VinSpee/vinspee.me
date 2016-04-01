import React from "react"

export default () => (
  <div dangerouslySetInnerHTML={
    { __html: `
      <script src="//use.typekit.net/apc4qof.js"></script>
      <script>try{Typekit.load({ async: true });}catch(e){}</script>
      ` }
    }
  />
)
