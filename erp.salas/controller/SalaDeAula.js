const SalaDeAula = require('../model/SalaDeAula');

class SalaDeAulaController {
  static getAll(req, res) {
    SalaDeAula.getAll((err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ data: rows });
      }
    });
  }

  static getById(req, res) {
    const { id } = req.params;
    SalaDeAula.getById(id, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ data: row });
      }
    });
  }

  static insert(req, res) {
    const { descricao, localizacao, capacidade } = req.body;
    SalaDeAula.insert({ descricao, localizacao, capacidade }, (err, lastID) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ message: 'Nova sala de aula criada!', salasdeaulaid: lastID });
      }
    });
  }

  static update(req, res) {
    const { id } = req.params;
    const { descricao, localizacao, capacidade } = req.body;
    SalaDeAula.update(id, { descricao, localizacao, capacidade }, (err) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ message: 'Sala de aula atualizada!' });
      }
    });
  }

  static delete(req, res) {
    const { id } = req.params;
    SalaDeAula.softDelete(id, (err) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ message: 'Sala de aula removida (soft delete)' });
      }
    });
  }
}

module.exports = SalaDeAulaController;
