const todo_model = require('../models/todo_model');
const todo_db = require('../database/todo_db');

/**
 * This Module serves to hold controller functions
 * for the todo route
 */

async function listTodos(req, res) {
    try{
        page = req.query.page ? Number.parseInt(req.query.page) : 1;
        size = req.query.size ?  Number.parseInt(req.query.size) : 10;

        if (isNaN(page)) return res.status(400).json({ message: 'Invalid page' });
        if (isNaN(size)) return res.status(400).json({ message: 'Invalid size' });

        const todos = await todo_db.listTodos(size, page);
        return res.status(200).json(todos);
    }
    catch(err){
        res.status(500).json(err);
    }
}


async function createTodo(req, res) {
    try{
        const todo = req.body;
        const newTodo = await todo_db.createTodo(todo);
        return res.status(201).json(newTodo);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function getTodoById(req, res) {
    try{
        const id = req.params.id;
        const todo = await todo_db.getTodoById(id);
        if (todo) return res.status(200).json(todo);
        else return res.status(404).json({ message: 'Todo not found' });
    }
    catch(err){
        return res.status(500).json(err);
    }
}

async function updateTodo(req, res) {
    try{
        const id = req.params.id;
        const todo = req.body;
        if (!(await todo_db.getTodoById(id))) return res.status(404).json({ message: 'Todo not found' });
        const updatedTodo = await todo_db.updateTodo(id, todo);
        return res.status(200).json(updatedTodo);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

async function deleteTodo(req, res){
    try{
        const id = req.params.id;
        if (!(await todo_db.getTodoById(id))) return res.status(404).json({ message: 'Todo not found' });
        await todo_db.deleteTodo(id);
        return res.status(204).send()
    }
    catch(err){
        res.status(500).json(err);
    }
}

module.exports = {
    listTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}