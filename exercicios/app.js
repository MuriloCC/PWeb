const express = require('express');

const app = express();
app.set('view engine', 'ejs')

const texto = require('./modulo1')

app.get("/", (req, res) => {
  res.render("home/index")
});

app.get("/adicionar-usuario", (req, res) => {
  res.render("admin/adicionar_usuario")
});

app.get("/historia", (req, res) => {
  res.render("informacoes/historia")
})

app.get("/cursos", (req, res) => {
  res.render("informacoes/cursos")
})

app.get("/professores", (req, res) => {
  res.render("informacoes/professores")
})

app.listen(3000, () => {
  console.log(`Rodando, módulo ${texto}`)
})