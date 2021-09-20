const express = require('express');

const app = express();

app.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

app.get('/cursos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

app.get('/cursos', (req, res) => {
  return res.json(cursos);
});

app.post('/cursos', (req, res) => {
  const { name } = req.body;

  cursos.push(name);

  return res.json(cursos);
});

app.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

app.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: 'O curso foi deletado.' });
});

app.listen(3000);