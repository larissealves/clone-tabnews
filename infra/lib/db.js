const {Client} = require("pg");
require("dotenv").config({ path: __dirname + "/.env.development" });

 
async function query(queryObject) {
  console.log("URL do banco:", process.env.DATABASE_URL);

  const client = new Client({ 
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect(); 
  const result = await client.query(queryObject);
  await client.end();   
  return result;
}

module.exports = {
  query: query,
};

// --- bloco de auto-teste quando rodar `node infra/lib/db.js`
if (require.main === module) {
  (async () => {
    try {
      const res = await query("SELECT NOW()");
      console.log("NOW():", res.rows[0]);
    } catch (err) {
      console.error("Erro no teste de conexão:", err);
      process.exitCode = 1;
    }
  })();
}