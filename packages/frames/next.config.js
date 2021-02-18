const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');

const typescriptLoader = {
  test: /\.ts(x?)$/,
  loader: ['ts-loader'],
  exclude: /node_modules/,
};

module.exports = withCSS(
  withSASS({
    webpack: (config) => {
      config.module.rules.push(typescriptLoader);
      config.module.rules.map((rule) => {
        if (rule.test !== undefined && rule.test.source.includes('|svg|')) {
          rule.test = new RegExp(rule.test.source.replace('|svg|', '|'));
        }
      });
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  })
);