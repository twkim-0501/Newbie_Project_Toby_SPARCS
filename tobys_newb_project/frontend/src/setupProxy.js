const createProxyMiddleware = require("http-proxy-middleware");

// Frontend로 들어온 API 요청을 Backend로 전달합니다 (proxy)
// 예를 들어 http://localhost:3000/api/list 로 들어온 요청은
// http://localhost:8080/list 로 전달됩니다.

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      },
    })
  );
};