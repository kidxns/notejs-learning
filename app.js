const http = require("http");
const fs = require("fs");

const CONFIG = require("./constants/config");

const onRequest = (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    err ? res.write("page not found") : res.write(data);
    res.end();
  });
};

const server = http.createServer(onRequest);
server.listen(CONFIG.PORT);
