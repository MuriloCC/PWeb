const http = require('http');

const server = http.createServer((req, res) => {
  const request = req.url
  if(request == '/historia') return res.end("<html><body>historia da Fatec Sorocaba</body></html>");
  if(request == '/cursos') return res.end("<html><body>cursos da Fatec Sorocaba</body></html>");
  if(request == '/professores') return res.end("<html><body>professores da Fatec Sorocaba</body></html>");

  res.end("<html><body>Site da Fatec Sorocaba</body></html>");

});

server.listen(3000);