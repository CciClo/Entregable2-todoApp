const jwt = require("jsonwebtoken");
const AuthService = require("../services/auth.services");
require("dotenv").config();


const userLogin = async (req, res) => {
    const {email, password} = req.body;

    try {

        const response = await AuthService.login(email, password);

        if (response.isValid) {
            const data = {
                email: response.result.email,
                username: response.result.username,
                id: response.result.id
            };
            // firmar un nuevo token
            /*
            npm i jsonwebtoken
            payload es el data
            el secret es una palabra clave o una llave
            cual sera el algoritmo que sera encriptado
            */
            const token = jwt.sign(data, process.env.JWT_SECRET,{algorithm: "HS512", expiresIn: "1m"});

            // console.log(token);

            data.token = token;

            res.json(data);
        }else {
            res.status(401).json({message:"Credenciales invalidas"})
        }


        // res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};


module.exports = {userLogin}