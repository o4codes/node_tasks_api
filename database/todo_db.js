const todo_model = require('../models/todo_model');

/**
 * This holds all database read write operations
 */

// list all todos
async function listTodos(size, page) {
    size = size || 10;
    page = page || 1;

    data = await todo_model.find({}).skip(size * (page - 1)).limit(size);
    return {
        page: page,
        size: size,
        page_size: data.length,
        total_count: await todo_model.countDocuments(),
        data: data,
    }
}

// create a todo
async function createTodo(todo) {
    return await todo_model.create(todo);
}

// get a todo by id
async function getTodoById(id) {
    return await todo_model.findById(id);
}

// update a todo
async function updateTodo(id, todo) {  
    return await todo_model.findByIdAndUpdate(id, todo, { new: true });
}

async function deleteTodo(id) {
    return await todo_model.findByIdAndDelete(id);
}


module.exports = {
    listTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}