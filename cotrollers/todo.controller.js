const TodoModel = require('../models/TodoScheme.model.js');
const Router = require('express');
const router = Router();

function createTodo(req, res) {
  const createdModel =  TodoModel.create(req.body);
  res.status(201).json(createdModel);
}

// router.post('/createTodo', (req, res) => {
//   TodoModel.create();
// })

module.exports = { createTodo };