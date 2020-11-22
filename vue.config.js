/* eslint-disable prettier/prettier */
// vue.config.js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    chainWebpack(config) {
        /* Compression gzip
        ============================================= */
        config.plugin('CompressionPlugin').use(CompressionPlugin);
    }
};