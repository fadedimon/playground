const { getNodeExternals } = require('./externals');
const { getBabelLoader, getFileLoader } = require('./loaders');
const { getDefaultPlugins, getNodemonPlugin } = require('./plugins');
const { getDefaultResolve } = require('./resolvers');

module.exports = {
    getNodeExternals,
    getBabelLoader,
    getFileLoader,
    getDefaultPlugins,
    getNodemonPlugin,
    getDefaultResolve,
};
