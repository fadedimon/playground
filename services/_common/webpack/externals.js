const nodeExternals = require('webpack-node-externals');

const getNodeExternals = () => nodeExternals();

module.exports = { getNodeExternals };
