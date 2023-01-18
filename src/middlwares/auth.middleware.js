/// vamos a validar el token

const jwt = require("jsonwebtoken");
require("dotenv").config();

/// si es valido
// lo dejamos pasar a la ruta 

//// si es invalido
// respondemos que no puede pasar

/// esto es para proteger nuestras rutas

// el next es para que siga al siguiente middleware
const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers;

    token = token.replace("Bearer ", "");

    jwt.verify(
        token, process.env.JWT_SECRET,
        {algorithms: "HS512"},
        (err, decode) => {
            if(err) {
                res.status(400).json({
                    error: "invalid token",
                    message: "EL token no es valido, envia un token correcto"
                });
            }else {
                next();
            }
        }
    )
    
    console.log(token);

};


module.exports = authMiddleware;