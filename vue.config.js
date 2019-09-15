let publicPath = '/';

if (process.env.REPOSITORY_URL) {
    // build from netlify
    console.log('BUILD triggered by NETLIFY');
    console.log('Using GraphQL hosted at: ', process.env.VUE_APP_GRAPHQL_HTTP);
} else if (process.env.NODE_ENV === 'production') {
    publicPath = '/aboutblank/'
}


module.exports = {
    publicPath: publicPath,
    pluginOptions: {
        apollo: {
            enableMocks: true,
            enableEngine: false
        }
    }
};
