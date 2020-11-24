/* eslint-disable prettier/prettier */
// vue.config.js
// const CompressionPlugin = require('compression-webpack-plugin');

// module.exports = {
//     chainWebpack(config) {
//         /* Compression gzip
//         ============================================= */
//         config.plugin('CompressionPlugin').use(CompressionPlugin);

//         const svgRule = config.module.rule('svg')

//         svgRule.uses.clear()

//         svgRule
//             .use('vue-svg-loader')
//             .loader('vue-svg-loader')
//     }
// };

// module.exports = {
//     chainWebpack: config => {
//         const svgRule = config.module.rule('svg')

//         svgRule.uses.clear()

//         svgRule
//             .use('vue-svg-loader')
//             .loader('vue-svg-loader')
//     }
// }