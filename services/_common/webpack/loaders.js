const getBabelLoader = () => {
    return {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                    plugins: ['relay'],
                },
            },
        ],
    };
};

const getFileLoader = ({ test, name } = {}) => {
    return {
        test: test || /\.(png|jpg|gif|svg|ttf|eof|eot|woff|woff2|dms|cer|mp4|mov|mp3|ogg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: name || '../_/[hash].[ext]',
                },
            },
        ],
    };
};

module.exports = { getBabelLoader, getFileLoader };
