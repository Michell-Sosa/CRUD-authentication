import {Router} from 'express' //se importa la funcion router para crear un enrutador
import {login, register} from '../controllers/auth.controller.js'






const router = Router() //cuando router se ejecuta brinda un objeto nuevo, el cual 
//se guarda en una constante en este caso 


//se crea la ruta llamada register y login, estas son las tipicas
router.post ('/register', register); // lo que se ejecutara cuando estas sean llamadas
router.post ('/login', login); // se desarrolla en controllers


//el router sera exportado para poder agregarlo en la aplicacion de express
export default router;