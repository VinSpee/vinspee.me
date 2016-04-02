import React from "react"
/*eslint-disable*/
export default () => (
  <div dangerouslySetInnerHTML={
    { __html: `
      <script src="//use.typekit.net/apc4qof.js"></script>
      <script>try{Typekit.load({ async: true });}catch(e){}</script>
      <script>
        (function(v,i,n,s,p,e,m){v['GoogleAnalyticsObject']=p;v[p]=v[p]||function(){
        (v[p].q=v[p].q||[]).push(arguments)},v[p].l=1*new Date();e=i.createElement(n),
        m=i.getElementsByTagName(n)[0];e.async=1;e.src=s;m.parentNode.insertBefore(e,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-35786009-1', 'auto');
        ga('send', 'pageview');
      </script>
      ` }
    }
  />
)
/*eslint-enable*/
