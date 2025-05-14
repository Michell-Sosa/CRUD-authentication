import express from "express";  //importando express
import morgan from 'morgan'; //importando morgan 

const app = express ()  //inicializando express ejecutandolo y guardando el objeto devuelto en una constante app


app.use(morgan('dev')); //usa morgan con su configuracion dev para que muestre un mensaje corto por consola
export default app;  //una vez inicializado el app, se exportara 






