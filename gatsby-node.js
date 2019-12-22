const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `)
  console.log(result.data.allShopifyProduct.edges);
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product-page.js`),
      context: {
        handle: node.handle,
      },
    })
  })
}
