const express = require('express');
const db = require ("./utils/database");
const initModels = require('./models/initModels');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');

// crear  una instancia de express
const app = express();
app.use( express.json() );

const PORT = 8000;

// probar la base de datos
db.authenticate()
    .then(() => console.log("Autenticacion exitosa"))
    .catch(error => console.log(error));

initModels();

// vamos a usar el metodo sync para sincronizar la imformacion de la db
// el alter es para que note los cambios
// el force es para borrar y crear nuevamente 
db.sync({ /*alter: true*/ force: false })
    .then(() => console.log("Base de datos sincronizada"))
    .catch( error => console(error));


app.get('/', (req, res) => {
    res.status(200).json({message: "Bienvenido al servidor"});
});


/////////////////////////////
// Users
//// consultar los usuarios
app.get("/users", async (req, res) => {
    try {
        // vamos a obtener todos los resultados dela db
        const result = await Users.findAll(); // SELECT * FROM users;
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
});
// consultar un usuario por id
app.get("/users/:id", async (req, res) => {
    const { id } = req.params;

    try {

        // findByPk es directa

        const result = await Users.findByPk(id);
        result ? res.status(200).json(result) : res.status(400).json(id);

    } catch (error) {
        console.log(error);
    }

});
// consultar un usuario por username
app.get("/users/username/:username", async (req, res) => {
    const { username } = req.params;

    try {

        // findOne  SELECT * FROM users WHERE username/oLoQueCoincida

        const result = await Users.findOne({ where: {username} });
        result ? res.status(200).json(result) : res.status(400).json(result);

    } catch (error) {
        console.log(error);
    }

});
// crear un usuario
app.post("/users", async (req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);
        
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});
// actualizar usuario, solamente podemos el password
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const field = req.body;

        const result = await Users.update(field, {
            where: {id}
        });

        res.status(200).json(result);

    } catch (error) {
        console.log(error);
    }
});
// eliminar usuario
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {

        const result = await Users.destroy(
            {
                where: {id}
            }
        );

        res.status(200).json(result);
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message);
    }
});
////////////////////////////////////////////////////
/// Todos
//// consultar los todos
app.get('/tasks', async (req, res) => {
    try {
        const result = await Todos.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.get('/tasks/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const result = await Todos.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.get('/tasks/title/:title', async (req, res) => {
    let {title} = req.params;
    try {
        const result = await Todos.findOne({where: {title}});
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const task = req.body;
        const result = await Todos.create(task);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

app.put('/tasks/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const field = req.body;
        const result = await Todos.update(field, {
            where: {id}
        });

        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});

app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const result = await Todos.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
///////////////////
app.listen(PORT, () => {
    console.log(`Servidor coriendo en el puerto ${PORT}`);
});

