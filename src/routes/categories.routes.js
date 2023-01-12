const { Router } = require("express");
const { getAllCategories } = require("../controllers/categories.controller");


const router = Router();

router.get("/categories/:id", getAllCategories);

module.exports = router;
