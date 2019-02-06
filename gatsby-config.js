module.exports = {
  siteMetadata: {
    title: `AirSMU - Read and Write Reviews about your Exchange Experience`,
    description: `Many students in SMU have trouble finding information about Exchange/Host University/Country other than the one provided by school. AirSMU brings a platform for student to write about their unique Exchange experience and let juniors know what to expect!`,
    author: `@huiyeon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `pages`,
            path: `${__dirname}/src/pages`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve:'gatsby-transformer-remark',
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                      maxWidth: 850,
                    },
                },
                {
                    resolve: `gatsby-remark-responsive-iframe`,
                    options: {
                      wrapperStyle: `margin-bottom: 1.0725rem`,
                    },
                },
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        classPrefix: "language-",
                        inlineCodeMarker: null,
                        aliases: {},
                        showLineNumbers: false,
                        noInlineHighlight: false,
                    },
                },
                'gatsby-remark-copy-linked-files',
                'gatsby-remark-smartypants',
            ]
        }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
