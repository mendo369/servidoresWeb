const express = require('express');//para trabajar express primero se debe crear una dependencia/aplicación de express
const Service= require('./src/service')

const app= express();
//se debe levantar el servidor para que la app escuche cualquier petición
const port = 3000;
app.use(express.json());//esta utilidad nos permite recibir datos de tipo JSON desde nuestros clientes

app.get('/', (request, response)=>{
    response.json({
        message: "lista de usuarios",
        body: Service.getUsers(),
    });
})//los verbos reciben la ruta y el controlador de la ruta

app.post('/', (request, response)=>{
    let newUser = request.body;
})

app.listen(port, ()=>{
    console.log(`servidor escuchando en http://localhost:${port}`);
})
