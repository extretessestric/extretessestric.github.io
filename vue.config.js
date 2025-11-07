/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  // Root deploy → no subpath
  publicPath: "/",

  chainWebpack: config => {
    // keep your existing rule
    config.module.rules.delete("eslint");
  }
};