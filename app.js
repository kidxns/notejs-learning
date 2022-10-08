const http = require("http");

const routers = require('./core/routers');
const CONFIG = require("./constants/host");

const onRequest = (req, res) => {
  routers(req, res);
};

const server = http.createServer(onRequest);
server.listen(CONFIG.PORT);
