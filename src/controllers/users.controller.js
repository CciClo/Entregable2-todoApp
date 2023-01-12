const UserServices = require("../services/user.services");

const getAllUsers = async (req, res) => {
    // res.json({message: 'esta funcionando'});

    try {
        const result = await UserServices.getAll();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    };

};

const getUserById = async(req, res) => {
    // res.json({message: 'es por id'});
    const { id } = req.params;

    try {
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
   };
};

const getUserWithTasks = async(req, res) => {
    const {id} = req.params;

    try {
        const result = await UserServices.getWithTasks(id);
        res.json(result) // for defaultValue is 200
    } catch (error) {
        res.status(400).json(error.message)
    };
};

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await UserServices.create(user);
        res.status(201).json(result);
        
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    };
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    try {
        const result = await UserServices.update( user, id );
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error.message)
    };
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {

        const result = await UserServices.delete(id);
        res.status(200).json(result);

    } catch (error) {
        console.log(error)
        res.status(400).json(error.message);
    };
};

module.exports = {
    getAllUsers, 
    getUserById,
    getUserWithTasks,
    createUser,
    updateUser,
    deleteUser,
};