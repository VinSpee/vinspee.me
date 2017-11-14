const path = require(`path`)
const visit = require(`unist-util-visit`)
const cheerio = require(`cheerio`)
const Promise = require(`bluebird`)

module.exports = (
  {
    markdownAST
  },
  customClassNames = {}
) => (
  new Promise(resolve => {
    visit(markdownAST, node => {
      console.log(node);
      const $ = cheerio.load(node.value);
      Object.entries(customClassNames).map(([key, val]) => {
        const el = $(key);
        $(el).attr(
          `class`,
          `${val} ${(el).attr(`class`)}`
        );
      });
    })

    return resolve(markdownAST)
  })
);
