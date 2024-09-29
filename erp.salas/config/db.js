const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../salasdeaula.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS salasdeaula (
      salasdeaulaid INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT NOT NULL,
      localizacao TEXT NOT NULL,
      capacidade INTEGER NOT NULL,
      removido BOOLEAN NOT NULL DEFAULT 0
    )
  `);
});

module.exports = db;