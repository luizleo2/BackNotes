/**
 * Criação e conexão com banco de dados, vai gerar database.db vazio na 
 * pasta database/sqlite/database.db, para visualizar o banco de dados
 * utilizamos o BEEKEEPER instalado no projeto
*/

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");


async function sqliteConnection(){
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });
  return database;
}

module.exports = sqliteConnection;