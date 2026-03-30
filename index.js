const http = require("http");
const port = process.env.PORT || 3000;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization"
};

http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, CORS);
    res.end();
    return;
  }
  res.writeHead(200, { ...CORS, "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", message: "Hello from Railway!", time: new Date().toISOString() }));
}).listen(port, () => console.log("Listening on port " + port));
