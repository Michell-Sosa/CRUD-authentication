import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({  //creando un nuevo esquema que resultara en un objeto taskSchema
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId, //esto es para que se guarde el id del usuario que creo la tarea
        ref: 'User', //referencia al modelo User
        required: true //esto es para que sea obligatorio
    }

}, { timestamps: true }); //agregando timestamps para que se guarde la fecha de creacion y actualizacion del objeto


export default mongoose.model('Task', taskSchema); //exportando el modelo de mongoose con el nombre Task y el esquema taskSchema