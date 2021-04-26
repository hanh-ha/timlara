const { createProxyMiddleware } = require('http-proxy-middleware');

const configs = require('./configs.json');

module.exports = function (app) {
	const ar = {
		target: configs.apiBase,
		secure: false,
		logLevel: 'debug',
		changeOrigin: true,
		pathRewrite(path_) {
			return path_.substring(4, path_.length);
		},
	};
	app.use(createProxyMiddleware('/api/', ar));
};
