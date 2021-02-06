
const path = require('path');

function devtoolModuleFilenameTemplate(info)
{
	return info.absoluteResourcePath;
}

module.exports = [
    {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        target: 'node',
        mode: 'development',
        devtool: 'source-map',
        entry: './src/server/index.ts',
        output: {
            devtoolModuleFilenameTemplate,
            filename: 'index.js',
            path: path.resolve(__dirname, './dist')
        }
    }
];
