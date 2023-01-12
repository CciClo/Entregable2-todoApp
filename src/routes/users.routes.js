const { Router } = require("express");
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserWithTasks } = require("../controllers/users.controller");

const router = Router();

//////////////////

//// Todas las peticiones de users
router.get('/users', getAllUsers );

router.get('/users/:id', getUserById );

/// obtener a un usuario con sus tareas
router.get('/users/:id/tasks', getUserWithTasks );

router.post('/users', createUser );

router.put('/users/:id', updateUser );

router.delete('/users/:id', deleteUser );


module.exports = router;