module.exports = {
    publicPath: process.env.NODE_ENV === 'production' && process.env.netlify !== true
        ? '/aboutblank/'
        : '/',
    pluginOptions: {
        apollo: {
            enableMocks: true,
            enableEngine: false
        }
    }
};
