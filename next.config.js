/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ko', 'ja', 'vi', 'fr', 'de', 'zh-Hans', 'zh-Hant'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
