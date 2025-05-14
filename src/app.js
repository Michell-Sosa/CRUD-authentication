import express from "express";  //importando express
import morgan from 'morgan'; //importando morgan 


import authRoutes from './routes/auth.routes.js'


const app = express ()  //inicializando express ejecutandolo y guardando el objeto devuelto en una constante app


app.use(morgan('dev')); //usa morgan con su configuracion dev para que muestre un mensaje corto por consola
app.use(express.json()); //esto se usa para que el servidor express interprete un json de manera apropiada 

app.use('/api', authRoutes); //pidiendo que app use authroutes, todas las rutas empezaran con '/api'

export default app;  //una vez inicializado el app, se exportara 






