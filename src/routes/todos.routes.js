const { Router } = require("express");
const { 
    getAllTasks, 
    getTaskById, 
    createTask, 
    updateTask, 
    deleteTask, 
    getTaskWithCategories 
} = require("../controllers/todos.controller");
const authMiddleware = require("../middlwares/auth.middleware");

const router = Router();


router.get('/tasks', authMiddleware, getAllTasks);

router.get('/tasks/:id', getTaskById);

router.get("/tasks/:id/categories", getTaskWithCategories);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

module.exports = router;

