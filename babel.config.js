const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push([
    'module-resolver',
    {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
            '@': './src',
            '@assets': './assets',
            '@styles': './src/styles',
            '@modules': './src/modules',
            '@router': './src/router',
            '@UI': './src/components/UI',
            '@helpers': './src/helpers',
            '@schemas': './src/schemas',
            '@services': './src/services',
            '@mocks': './__mock__',
            '@tests': './tests',
        },
    },
])

module.exports = {
    presets,
    plugins,
}
