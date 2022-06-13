const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Rodando');
  res.end("<html><body>Site da Fatec Sorocaba</body></html>");
});

server.listen(3000);