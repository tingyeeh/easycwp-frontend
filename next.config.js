/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ko', 'ja', 'vi', 'fr', 'de', 'zh-Hans', 'zh-Hant'],
    defaultLocale: 'en',
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })
    return config
  },
}

module.exports = nextConfig
