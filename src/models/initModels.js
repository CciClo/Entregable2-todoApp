// vamos a importar todos los modelos creados

const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');
const TodosCategories = require('./todos_categories.model');

const initModels = () => {
    // Users;   // se comentan por que se esta usando mas abajo
    // Todos;
    // Categories;
    // TodosCategories;


    // vamos a crear relaciones
    // hasOne    para indicar que tiene una tarea, uno a uno
    // hasMany    tiene muchos
    // belongsTo   pertenece a 

    Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'} );
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'}); // el as y foreignKey es opocional, son opciones, esto se muestra en la respuesta del json


    /// entre catedories to todos
    TodosCategories.belongsTo(Todos, { as: "tasks", foreignKey:"todo_id" });
    Todos.hasMany(TodosCategories, { as: "category", foreignKey: "todo_id" });

    TodosCategories.belongsTo(Categories, { as: "category", foreignKey: "category_id" });
    Categories.hasMany(TodosCategories, { as: "task", foreignKey: "category_id" });

    Categories.belongsTo(Users, {as:'author', foreignKey: 'user_id'});
    Users.hasMany(Categories,{as:'categories', foreignKey: 'user_id'})

    // drop table "La tabla/modelo a eleminar"
    // drop TABLE nombreDelModelo CASCADE
};


module.exports = initModels;