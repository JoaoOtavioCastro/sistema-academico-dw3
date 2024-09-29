const express = require('express');
const bodyParser = require('body-parser');
const salaDeAulaRoutes = require('./routes/salaDeAula');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', salaDeAulaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
