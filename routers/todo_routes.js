const  router = require('express').Router();
const todoController = require('../controllers/todo_controller');

/**
 * This handles the routes for the todo controller 
 */

router.get('/', todoController.listTodos);
router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;