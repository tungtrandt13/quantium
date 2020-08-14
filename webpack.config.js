var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: './build/temp/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        }),
        /*new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()*/
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.css|\.scss?$/,
                loader: 'style-loader!css-loader'
            },{ 
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'file-loader?limit=100000' 
            }
        ]
    },
    externals: {
        // require('data') is external and available
        //  on the global var data
        'data': 'data'
    }
};
