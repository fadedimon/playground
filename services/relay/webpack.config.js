const path = require('path');
const {
    getBabelLoader,
    getDefaultPlugins,
    getNodemonPlugin,
    getDefaultResolve,
    getNodeExternals,
} = require('../_common/webpack');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = [
    {
        mode,
        target: 'node',
        entry: ['./src/server/index.ts'],
        output: {
            publicPath: `/assets/`,
            path: path.resolve(__dirname, '_dist/server'),
            filename: 'index.js',
        },
        resolve: getDefaultResolve(),
        externals: [getNodeExternals()],
        module: {
            rules: [getBabelLoader()],
        },
        plugins: [
            ...getDefaultPlugins(),
            getNodemonPlugin({
                script: './_dist/server/index.js',
                watchDir: path.resolve('./_dist/server'),
                nodeArgs: ['--inspect=9229'],
            }),
        ],
        node: {
            __dirname: false,
            __filename: false,
        },
        optimization: {
            minimize: false,
            nodeEnv: false,
        },
        devtool: 'eval-source-map',
    },
];
