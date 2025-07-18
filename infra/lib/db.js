// lib/db.js
require('dotenv').config();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Neon usa SSL
});

client.connect()
  .then(() => console.log('📡 Conectado ao PostgreSQL (Neon)'))
  .catch(err => console.error('❌ Erro ao conectar ao banco:', err));

module.exports = client;
