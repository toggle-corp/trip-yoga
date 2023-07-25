/** @type {import('next-sitemap').IConfig} */

const config = {
    siteUrl: process.env.DEPLOYMENT_URL || 'https://tripyoganp.com/',
    exclude: ['/404'],
    generateRobotsTxt: true,
    outDir: './out',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: ['/404'],
            },
            { userAgent: '*', allow: '/' },
        ],
    },
};

module.exports = config;
