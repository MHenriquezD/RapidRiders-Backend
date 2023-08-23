"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.server = '127.0.0.1';
        this.port = '27017';
        this.db = 'rapidriders';
        mongoose_1.default.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
            .then(() => {
            console.log('Se conecto a Mongo');
        }).catch((error) => {
            console.error('Ocurrio un error al conectarse', error);
        });
    }
}
exports.Database = Database;
// import mongoose from "mongoose";
// //Conexión a la base de datos
// export class Database {
//     constructor() {
//         mongoose.connect(`mongodb+srv://mhenriquez:LGsus-3312@cluster0.gb5wwpc.mongodb.net/RapidRiders`)
//         .then(()=>{
//             console.log('Se conectó a Mongo');
//         }).catch((error) => {
//             console.error('Ocurrió un error al conectarse', error);
//         });
//     }
// }
