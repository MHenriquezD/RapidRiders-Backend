"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tareas_router_1 = __importDefault(require("./routes/tareas.router"));
const clientes_router_1 = __importDefault(require("./routes/clientes.router"));
const categorias_router_1 = __importDefault(require("./routes/categorias.router"));
const motoristas_router_1 = __importDefault(require("./routes/motoristas.router"));
const database_1 = require("./database/database");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const db = new database_1.Database();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/tareas', tareas_router_1.default);
app.use('/clientes', clientes_router_1.default);
app.use('/categorias', categorias_router_1.default);
app.use('/motoristas', motoristas_router_1.default);
// http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Servidor para pruebas de Rapid Riders");
    res.end();
});
//Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor en puerto 3000');
});
