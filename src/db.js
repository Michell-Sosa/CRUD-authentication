import mongoose from 'mongoose';


//esta funcion se exporta porke es la que se va a usar en otras partes 
export const connectDB = async () => {

    try { //esto se pone entre un try catch en caso de que falle
        //pidiendo que se conecte a la base de datos merndb
        await mongoose.connect('mongodb://localhost/merndb');
        console.log('>>>> DB is connected');

    } catch (error) {
        console.log(error); //si el codigo falla entonces se va a mostrar error
    }

};