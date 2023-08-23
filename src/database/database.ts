import mongoose from "mongoose";
export class Database{
    server: string = '127.0.0.1';
    port: string = '27017';
    db:string = 'rapidriders';

    constructor() {
        mongoose.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
        .then(()=>{
            console.log('Se conecto a Mongo');
        }).catch((error)=> { 
            console.error('Ocurrio un error al conectarse', error);
        });
    }
}



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