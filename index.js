const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", message: "Hello from Railway!", time: new Date().toISOString() }));
}).listen(port, () => console.log(`Listening on port ${port}`));