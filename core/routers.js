const fs = require("fs");
const url = require("url");

const CONFIG = require("../constants/routers");

const renderPage = (path, res) => {
  fs.readFile(path, (err, data) => {
    err ? res.write("page not found") : res.write(data);
    res.end();
  });
};

const abort404 = (res) => {
  res.writeHead(404);
  res.write("page not found");
  res.end();
};

const routers = (req, res) => {
  const pathName = url.parse(req.url).pathname;
  switch (pathName) {
    case CONFIG.HOME:
      renderPage("./views/index.html", res);
      break;
    case CONFIG.ABOUT:
      renderPage("./views/about.html", res);
    default:
      abort404(res);
      break;
  }
};

module.exports = routers;
