const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
    output: {
        library: 'nonReactDataTable',
        libraryTarget: 'umd',
        filename: 'nonReactDataTable.js',
        publicPath: './',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        writeToDisk: true,
        historyApiFallback: true,
        contentBase: './dist'
      },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
    ]
   },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        })
   ]
};