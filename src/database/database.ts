import mongoose from "mongoose";

//Conexión a la base de datos
export class Database {
    constructor() {
        mongoose.connect(`mongodb+srv://mhenriquez:LGsus-3312@cluster0.gb5wwpc.mongodb.net/`)
        .then(()=>{
            console.log('Se conectó a Mongo');
        }).catch((error) => {
            console.error('Ocurrió un error al conectarse', error);
        });
    }
}