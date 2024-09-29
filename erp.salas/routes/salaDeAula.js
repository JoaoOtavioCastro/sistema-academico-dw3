const express = require('express');
const SalaDeAulaController = require('../controller/SalaDeAula');

const router = express.Router();

// Rotas para CRUD de Salas de Aula
router.get('/salasdeaula', SalaDeAulaController.getAll);
router.get('/salasdeaula/:id', SalaDeAulaController.getById);
router.post('/salasdeaula', SalaDeAulaController.insert);
router.put('/salasdeaula/:id', SalaDeAulaController.update);
router.delete('/salasdeaula/:id', SalaDeAulaController.delete);

module.exports = router;