const TodosServices = require("../services/todos.services");


const getAllTasks = async (req, res) => {
    try {
        const tasks = await TodosServices.getAll();

        res.status(200).json(tasks);
    } catch (error) {
        throw error;
    };
};

const getTaskById = async(req, res) => {
    const {id} = req.params;
    try {
        const task = await TodosServices.getById(id);
        res.status(200).json(task);
    } catch (error) {
        throw error;
    };
};

const getTaskWithCategories = async(req, res) => {
    const {id} = req.params;

    try {
        const result = await TodosServices.getWithCategories(id);
        res.json(result);
    } catch (error) {
        res.status(400).json({
            error : error.message,
            details: error.stack
        });
    }
};

const createTask = async (req, res) => {
    const task = req.body;
    try {
        const result = await TodosServices.create(task);
        res.status(201).json(result);
    } catch (error) {
        throw error;
    };
};

const updateTask = async(req, res) => {
    const task = req.body;
    const {id} = req.params;

    try {
        const result = await TodosServices.update(task, id);
        res.status(200).json(result, task);
    } catch (error) {
        throw error;
    };
};

const deleteTask = async(req, res) => {
    const {id} = req.params;

    try {
        const result = await TodosServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
        throw error;
    };
};

module.exports = {
    getAllTasks,
    getTaskById,
    getTaskWithCategories,
    createTask,
    updateTask,
    deleteTask,
};