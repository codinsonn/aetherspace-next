/* --- Configuration ------------------------------------------------------------------------------ */

const config = {
    webpack: config => {
        // Overwrite webpack target when necessary
        if (process.env.WEBPACK_TARGET) config.target = process.env.WEBPACK_TARGET;
        // Alias react-native
        config.resolve.alias = { ...(config.resolve.alias || {}), 'react-native': 'react-native-web' };
        // Return edited config
        return config;
    },
    // TODO: Make dynamic
    exportPathMap: () => ({
        '/': { page: '/', query: {} },
    }),
};

// Overwrite next target when necessary
if (process.env.NEXT_TARGET) config.target = process.env.NEXT_TARGET;

/* --- Export Config ------------------------------------------------------------------------------ */

module.exports = config;
