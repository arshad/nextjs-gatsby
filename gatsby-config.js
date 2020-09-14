require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Next.js by Vercel - The React Framework for Production`,
        short_name: `Reflex`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`],
      },
    },
  ],
};
