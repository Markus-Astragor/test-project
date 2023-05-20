const express = require('express');
const TodoController = require('../cotrollers/todo.controller');
const router = express.Router();

router.post('/', TodoController);

module.exports = router;