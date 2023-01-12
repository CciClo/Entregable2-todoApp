const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");
const Categories = require("../models/categories.model");
const TodosCategories = require("../models/todos_categories.model");


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
        title: 'Tarea1', isComplete: true, description: 'Descripcion pata 1', userId: 1
    },
    {
        title: 'Tarea2', isComplete: true , description: 'Descripcion pata 2', userId: 2
    },
    {
        title: 'Tarea3', description: 'Descripcion pata 3', userId: 1
    }
];

const categories = [
    {name: 'personal', userId: 1},
    {name: 'educacion', userId: 2 },
    {name: 'salud', userId: 1},
    {name: 'trabajo', userId: 2},
    {name: 'hogar', userId:  1},
    {name: 'cocina', userId: 2},
    {name: 'deporte', userId: 1},
    {name: 'ocio', userId: 2},
    {name: 'financiero', userId: 1},
    {name: 'entretenimiento', userId: 2},
];


const todosCategories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 2 },
    { categoryId: 1, todoId: 3 },
    { categoryId: 3, todoId: 3 },
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

        setTimeout(() => {
            categories.forEach(category => Categories.create(category));
        }, 300);

        setTimeout(() => {
            todosCategories.forEach(todoCategory => TodosCategories.create(todoCategory));
        }, 500);

    })
    .catch(error => console.log(error))