const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Using eval, but not security issue as input is static, not user controlled
eval("1+2")

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
