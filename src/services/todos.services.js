const Categories = require("../models/categories.model");
const Todos = require("../models/todos.model");
const TodosCategories = require("../models/todos_categories.model");
const Users = require("../models/users.model");


class TodosServices {
    static async getAll () {
        try {
            const result = await Todos.findAll();
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async getById (id) {
        try {
            const user = await Todos.findByPk(id);
            return user;
        } catch (error) {
            throw error;
        };
    };

    static async getWithCategories (id) {
        try {
            
            const result = await Todos.findOne({
                where: {id},
                attributes: ["id","title", "description", "isComplete", "user_id"],
                
                include: {
                    model: Users,
                    as: 'author',
                    attributes: ["username","email"],
                    /*
                    model:TodosCategories,
                    as: 'category',
                    include:{
                        model: Categories,
                        as: "category"
                    }
                    */
                   
                },
                
                include:{
                    model: TodosCategories,
                    attributes: ["id"],
                    as: 'category',
                    include:{
                        model: Categories,
                        as: "category"
                    }
                }
                
            });
            

            return result;
        } catch (error) {
            throw error;
        };
    };

    static async create (body) {
        try {
            const result = await Todos.create(body.task);
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async update (task, id) {
        try {
            const result = await Todos.update(task, {
                where: {id}
            });

            return result;
        } catch (error) {
            throw error;
        }
    };

    static async delete (id) {
        try {
            const result = await Todos.destroy({
                where: {id}
            });

            return result;
        } catch (error) {
            throw error;
        }
    };
};


module.exports = TodosServices;


/*

static async getWithCategory(id) {
        try {

            const result = await Todos.findOne({
                where: { id },
                attributes: ['title'],
                include: {
                    model: TodosCategories,
                    as: 'category',
                    attributes:[ 'id' ],
                    include:{
                        model: Categories,
                        as: 'category',
                        attributes:['name'],
                    }
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
}


*/