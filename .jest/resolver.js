/* eslint-disable no-param-reassign */
module.exports = (path, options) =>
  options.defaultResolver(path, {
    ...options,
    packageFilter: pkg => {
      if (pkg.name === '@hookform/resolvers') {
        delete pkg.exports;
        delete pkg.module;
      }
      return pkg;
    },
  });
