module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/aboutblank/'
        : '/',
    pluginOptions: {
        apollo: {
            enableMocks: true,
            enableEngine: false
        }
    }
};
