//Iniciamos 
const mongoose = require('mongoose');
const express = require('express');

//Iniciamos el servidor
const app = express();

//Conexión a la base de datos
mongoose.connect('mongodb+srv://mhenriquez:LGsus-3312@cluster0.gb5wwpc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));

//Configuración del servidor
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Rutas
// app.use('/api/tasks', require('.src/routes/index.router'));

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});