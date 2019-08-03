const {override, addPostcssPlugins, addDecoratorsLegacy, addWebpackAlias} = require("customize-cra");
const postcss = require("./postcss.config.js");
const path = require("path");
// postcss 配置项
const postcssPlugin = Object.keys(postcss).map(key => require(key)(postcss[key]));
module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, "src"),
    }),
    addPostcssPlugins(postcssPlugin),
    addDecoratorsLegacy()
);
