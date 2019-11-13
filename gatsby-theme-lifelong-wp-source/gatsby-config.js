// require dotenv so that it's useable.
require("dotenv").config()
module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: 'LifeLongWordPress',
                fieldName: 'lifelongwordpress',
                url: `${process.env.WP_BASE_URL}/graphql`
            }
        }
    ]
}