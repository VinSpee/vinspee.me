const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const fs = require('fs-extra')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const template = {
    post: path.resolve('./src/templates/blog-post.js'),
    page: path.resolve('./src/templates/page.js'),
    experiment: path.resolve('./src/templates/page.js'),
  };

  return new Promise((resolve, reject) => {
    const pages = []
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
                type
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: edge.node.frontmatter.type && template[edge.node.frontmatter.type] || template.page,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        })
      })
    )
  })
}
