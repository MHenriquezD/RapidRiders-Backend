"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//Conexión a la base de datos
class Database {
    constructor() {
        mongoose_1.default.connect(`mongodb+srv://mhenriquez:LGsus-3312@cluster0.gb5wwpc.mongodb.net/`)
            .then(() => {
            console.log('Se conectó a Mongo');
        }).catch((error) => {
            console.error('Ocurrió un error al conectarse', error);
        });
    }
}
exports.Database = Database;
