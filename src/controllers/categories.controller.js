const CategoriesServices = require("../services/categories.services");


const getAllCategories = async (req, res) => {

    const {id} = req.params;

    try {

        const result = await CategoriesServices.getAll(id);
        res.json(result);
        
    } catch (error) {
        res.status(400).json({
            error : error.message,
            details: error.stack
        });
    }
};


module.exports = {getAllCategories}