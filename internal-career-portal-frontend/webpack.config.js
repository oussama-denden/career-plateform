module.exports = {
    entry: "./src/js/main.js",
    output: {
        path:'./dist',
        filename: "bundle.js",
		publicPath: '/'
    },
	devServer: {
		inline: true,
		contentBase: './dist'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
