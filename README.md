# ttf-base64-loader

A custom Webpack loader for inlining ttf files as base64

```
npm install --save ttf-base64-loader
```
[ttf-base64-loader](https://www.npmjs.com/package/ttf-base64-loader) on npmjs.com

Add the following to your list of loaders in `webpack.config.js`
```
{
	test: /\.ttf$/,
	loader: 'ttf-base64'
}
```