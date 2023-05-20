const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
require('dotenv').config();

const PORT = process.env.PORT

app.get('/get', (req, res) => {
    res.json('Hello world')
})

app.listen(PORT, () => {
  console.log(`Server was started on ${PORT}`);
})

app.use('/todos', todoRoutes)

module.exports = app