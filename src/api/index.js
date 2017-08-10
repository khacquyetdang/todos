import { v4 } from 'uuid';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../constants.js';
const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'hey',
        completed: true
    },
    {
        id: v4(),
        text: 'ho',
        completed: false
    },
    {
        id: v4(),
        text: 'blo',
        completed: true
    },
    {
        id: v4(),
        text: 'cooking',
        completed: false
    },
    {
        id: v4(),
        text: 'let,s go',
        completed: true
    }]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve(), ms));


export function fetchTodos(filter) {
    return delay(500).then(() => {
        switch (filter) {
            case FILTER_ALL: {
                return fakeDatabase.todos;
            }
            case FILTER_COMPLETED: {
                return fakeDatabase.todos.filter(t => t.completed);
            }
            case FILTER_ACTIVE: {
                return fakeDatabase.todos.filter(t => !t.completed);
            }
            default: {
                throw new Error(`Unknown filter : ${filter}`);
            }
        }
    });
}



export function addTodo(text) {
    return delay(500).then(() => {
        var todo = {
            id: v4(),
            text: text,
            completed: false
        };
        fakeDatabase.todos.push(todo);
        return todo;
    });
}
export function toggleTodo(id) {
    return delay(500).then(() => {
        //throw new Error('!Boom');
        const todo = fakeDatabase.todos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        return todo;
    });
}
