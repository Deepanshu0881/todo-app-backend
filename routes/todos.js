const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

//create a new todo
router.post('/', todoController.createTodo);

//get all todos
router.get('/',todoController.getTodos);

//Update a todo
router.put('/:id', todoController.updateTodo);

//delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;