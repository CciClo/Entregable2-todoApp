const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");


const users = [
    { 
        username: 'Oscar', email: 'ocar@gmail.com', password: '123456' 
    },
    {
        username: 'Alex', email: 'alex@gmail.com', password: '123456' 
    }
];

const todos = [
    {
        title: 'Tarea1', description: 'Descripcion pata 1', userId: 1
    },
    {
        title: 'Tarea2', description: 'Descripcion pata 2', userId: 2
    },
    {
        title: 'Tarea3', description: 'Descripcion pata 3', userId: 1
    }
];

// const categories = [];

// const todosCategories = [];


db.sync({force: true})
    .then(() => {
        console.log("insertar imformacion");
        users.forEach((user) => Users.create(user)); // create es para insertar imformacion
        
        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        }, 100);
    })
    .catch(error => console.log(error))