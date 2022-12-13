const path = require(`path`);

const resolve = (string) => path.resolve(__dirname, `src/${string}`);

module.exports = {
  webpack: {
    alias: {
      '@actions': resolve('redux/actions'),
      '@assets': resolve('assets'),
      '@components': resolve('components'),
      '@constants': resolve('constants'),
      '@content': resolve('content'),
      '@hooks': resolve('hooks'),
      '@images': resolve('images'),
      '@redux': resolve('redux'),
      '@selectors': resolve('redux/selectors'),
      '@services': resolve('services'),
      '@translations': resolve('translations'),
      '@types': resolve('types'),
      '@utils': resolve('utils'),
    },
  },
};
