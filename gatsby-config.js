require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Екатерина Пашкова | Трихолог, дерматолог",
    lang: "ru",
    // HACK: using arrays so that graphql doesn't add absent fields to items
    meta: [
      [
        ["name", "viewport"],
        ["content", "width=device-width, initial-scale=1, shrink-to-fit=no"],
      ],
      [
        ["name", "author"],
        ["content", "gavrusev.dev"],
      ],
      [
        ["name", "description"],
        [
          "content",
          "Трихологическая и дерматологическая помощь на основе доказательной медицины",
        ],
      ],
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "STARTER",
        short_name: "STARTER",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-emotion",
    // "gatsby-plugin-preact",
    // "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
};
