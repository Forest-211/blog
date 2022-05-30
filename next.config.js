const { withContentlayer } = require('next-contentlayer');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/**
 * i18n settings
 * comment out this section if you don't need i18n
 */
const i18n = {
    locales: [
        {
            title: 'English',
            value: 'en-US'
        },
        {
            title: '中文',
            value: 'zh-CN'
        }
    ],
    defaultLocale: 'en-US'
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    ...i18n,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        config.plugins.push(new WindiCSSWebpackPlugin());
        return config;
    }
};

module.exports = withContentlayer(nextConfig);
