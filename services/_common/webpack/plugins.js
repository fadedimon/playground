const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

const getDefaultPlugins = () => {
    return [new webpack.IgnorePlugin(/^\.(css|styl)$/)];
};

/**
 *
 * @param {Object} options
 * @param {String} options.script Server entrypoint
 * @param {String} options.watchDir directory to watch changes in
 * @param {Number} [options.delay]
 * @param {String[]} [options.nodeArgs]
 */
const getNodemonPlugin = (options) => {
    if (!options) {
        throw new Error('options are required!');
    } else if (!options.script) {
        throw new Error('options are required!');
    } else if (!options.watchDir) {
        throw new Error('options.watchDir is required!');
    }

    const { script, watchDir, delay = 500, nodeArgs = [] } = options;

    return new NodemonPlugin({
        delay,
        script,
        nodeArgs,
        verbose: true,
        watch: watchDir,
    });
};

module.exports = { getDefaultPlugins, getNodemonPlugin };
