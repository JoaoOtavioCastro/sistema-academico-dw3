const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const salaDeAulaRoutes = require('../routes/salaDeAula');

// Configura o servidor de teste
const app = express();
app.use(bodyParser.json());
app.use('/api', salaDeAulaRoutes);

describe('Testando CRUD de Salas de Aula', () => {
  it('Deve inserir uma nova sala de aula', async () => {
    const res = await request(app)
      .post('/api/salasdeaula')
      .send({
        descricao: 'Sala 103',
        localizacao: 'Prédio C',
        capacidade: 25,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('salasdeaulaid');
  });

  it('Deve buscar todas as salas de aula', async () => {
    const res = await request(app).get('/api/salasdeaula');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Deve buscar uma sala de aula pelo ID', async () => {
    const res = await request(app).get('/api/salasdeaula/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('Deve atualizar uma sala de aula', async () => {
    const res = await request(app)
      .put('/api/salasdeaula/1')
      .send({
        descricao: 'Sala Atualizada',
        localizacao: 'Prédio A',
        capacidade: 50,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Sala de aula atualizada!');
  });

  it('Deve realizar o soft delete de uma sala de aula', async () => {
    const res = await request(app).delete('/api/salasdeaula/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Sala de aula removida (soft delete)');
  });
});
