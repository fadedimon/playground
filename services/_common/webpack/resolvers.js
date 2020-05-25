const getDefaultResolve = () => {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        modules: ['node_modules'],
    };
};

module.exports = { getDefaultResolve };
