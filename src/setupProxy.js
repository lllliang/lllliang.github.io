const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/read', {
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { '^/read': '' }
        }),
        createProxyMiddleware('/readLocks', {
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { '^/readLocks': '' }
        }),
        createProxyMiddleware('/write', {
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { '^/write': '' }
        }),
        createProxyMiddleware('/lock', {
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { '^/lock': '' }
        }),
        createProxyMiddleware('/unlock', {
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { '^/unlock': '' }
        }),
        createProxyMiddleware('/connect', {
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: { '^/connect': '' }
        })
    )
};