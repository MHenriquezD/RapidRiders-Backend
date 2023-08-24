import express, { Request, Response, Express } from 'express';
import clientesRouter from './routes/clientes.router';
import categoriasRouter from './routes/categorias.router';
import motoristasRouter from './routes/motoristas.router';
import adminsRouter from './routes/admins.router';

import { Database } from './database/database';
import cors from 'cors';

const app:Express = express();
const db:Database = new Database();
app.use(cors());
app.use(express.json());

app.use('/clientes', clientesRouter);
app.use('/categorias', categoriasRouter);
app.use('/motoristas', motoristasRouter);
app.use('/admins', adminsRouter);


// http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Servidor para pruebas de Rapid Riders");
    res.end();
});

//Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor en puerto 3000');
});