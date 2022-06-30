module.exports = (ctx) => ({
	map: ctx.options.map,
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		'postcss-for': {},
		'postcss-simple-vars': {},
		'postcss-100vh-fix': true,
		autoprefixer: true,
		'postcss-extract-media-query': {
			// false: extract only specified queries, not specified queries fallback to main
			// true: extract all the query found in the file
			extractAll: false, 
			// Specify the query to extract and the suffix
			queries: {
				'(min-width: 640px)' : 'sm',
				'(min-width: 768px)' : 'md',
				'(min-width: 1024px)' : 'lg',
				'(min-width: 1280px)' : 'xl',
				'(min-width: 1536px)' : '2xl',
			},
			output: {
				path: 'dist', // emit to 'dist' folder in root
				name: '[name]-[query].[ext]' // pattern of emited files
			},
			config: {
				plugins: {
					'cssnano': true
				}
			}
		},
		cssnano: true,
	}
});
