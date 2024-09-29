const db = require('../config/db');

class SalaDeAula {
  static getAll(callback) {
    const sql = 'SELECT * FROM salasdeaula WHERE removido = 0';
    db.all(sql, [], callback);
  }

  static getById(id, callback) {
    const sql = 'SELECT * FROM salasdeaula WHERE salasdeaulaid = ? AND removido = 0';
    db.get(sql, [id], callback);
  }

  static insert(data, callback) {
    const sql = 'INSERT INTO salasdeaula (descricao, localizacao, capacidade) VALUES (?, ?, ?)';
    const params = [data.descricao, data.localizacao, data.capacidade];
    db.run(sql, params, function (err) {
      callback(err, this?.lastID);
    });
  }

  static update(id, data, callback) {
    const sql = 'UPDATE salasdeaula SET descricao = ?, localizacao = ?, capacidade = ? WHERE salasdeaulaid = ? AND removido = 0';
    const params = [data.descricao, data.localizacao, data.capacidade, id];
    db.run(sql, params, callback);
  }

  static softDelete(id, callback) {
    const sql = 'UPDATE salasdeaula SET removido = 1 WHERE salasdeaulaid = ?';
    db.run(sql, id, callback);
  }
}

module.exports = SalaDeAula;