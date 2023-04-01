/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://easycwp.com',
  generateRobotsTxt: true,  
  exclude: [
    '/log-in', 
    '/sign-up',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'black-listed-bot',
        disallow: [
          '/log-in', 
          '/sign-up',
        ],
      },
    ],
    additionalSitemaps: [
      process.env.SITE_URL + '/sitemap-en.xml',
      process.env.SITE_URL + '/sitemap-ko.xml',
      process.env.SITE_URL + '/sitemap-ja.xml',
      process.env.SITE_URL + '/sitemap-vi.xml',
      process.env.SITE_URL + '/sitemap-fr.xml',
      process.env.SITE_URL + '/sitemap-de.xml',
      process.env.SITE_URL + '/sitemap-zh-Hans.xml',
      process.env.SITE_URL + '/sitemap-zh-hant',
    ],
  },
  alternateRefs: [
    {
      href: process.env.SITE_URL,
      hreflang: 'en',
    },
    {
      href: process.env.SITE_URL + '/ko',
      hreflang: 'ko',
    },
    {
      href: process.env.SITE_URL + '/ja',
      hreflang: 'ja',
    },
    {
      href: process.env.SITE_URL + '/vi',
      hreflang: 'vi',
    },
    {
      href: process.env.SITE_URL + '/fr',
      hreflang: 'fr',
    },
    {
      href: process.env.SITE_URL + '/de',
      hreflang: 'de',
    },
    {
      href: process.env.SITE_URL + '/zh-Hans',
      hreflang: 'zh-Hans',
    },
    {
      href: process.env.SITE_URL + '/zh-Hant',
      hreflang: 'zh-Hant',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
};
