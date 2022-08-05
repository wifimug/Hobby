/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode })

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
        allMdx {
            edges {
            node {
                id
                fields {
                slug
                }
            }
            }
        }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }




    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/blog/${node.frontmatter.template}.js`),
        context: {
          id: node.id,
          slug: node.frontmatter.slug,
          categoryName: node.frontmatter.title
        },
      })
    })

}