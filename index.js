const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
app.use(express.json(500))


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/relatorio', async (req, res) => {
  try {
    const [rows]=db.execute();
    res.status(200).json(rows)
    res.json({ message: 'Relatório gerado com sucesso' });
  } catch (error) {
    res.status(500).json({
        mensagem:"Erro interno do servidor"
    });
    console.error('Erro ao buscar relatório:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});