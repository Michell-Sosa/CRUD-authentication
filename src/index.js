import app from './app.js' //en este caso se pone sin llaves ya que se hizo un export default 
import {connectDB} from './db.js'  // en este caso se pone entre llaves porque se hizo un export 

connectDB(); //aqui se pide que se coneecte a la BD
app. listen (3000)
console.log ('Server on port', 3000)