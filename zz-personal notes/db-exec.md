<!-- para o arquivo .env -->
npm install dotenv

npm install pg

node lib/db.js

#modo "watch"

npm install --save-dev nodemon

2. Adicione um script no package.json:


"scripts": {
  "db-exec": "nodemon infra/lib/db.js"
}

run: npm run db-exec
