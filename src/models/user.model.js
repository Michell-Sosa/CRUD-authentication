import mongoose from 'mongoose'


//se esta creando el esquema de los que se va a guardar
//especificando que tipo de dato va a ser cada uno 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true  // esto sirve para eliminar los espacios agregados, por ejemplo [    Michell   ]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true //sirve para que no pueda repetirse un mail ya ingresado
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true})  //para guardar el momento en el que se creo la cuenta

export default mongoose.model('User', userSchema)
// aqui se le esta diciendo que todos los datos guardados 
// seran parte de un modelo llamado User, el cual se va a pluralizar
//y sera una coleccion llamada users donde se guardaran los objetos