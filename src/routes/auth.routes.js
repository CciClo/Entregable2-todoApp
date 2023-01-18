const { Router } = require("express");
const { userLogin } = require("../controllers/auth.controller");

const router = Router();

router.post('/auth/login', userLogin );

// userLogin 

module.exports = router;

