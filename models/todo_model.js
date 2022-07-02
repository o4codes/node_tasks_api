const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    },
    {
        timestamps: {
            createdAt: 'timestamp',
            updatedAt: false
        },
        versionKey: false
    },
    
);

todo_model = mongoose.model('Todo', todoSchema);

module.exports = todo_model;

