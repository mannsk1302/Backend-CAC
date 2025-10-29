const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);