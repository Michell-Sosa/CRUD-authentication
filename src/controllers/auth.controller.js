import User from '../models/user.model.js'  //se importa el modelo de user



//exportando const register que tendra un request y un response
export const register = async  (req, res ) => {
    const {email, password, username} = req.body // se espera que para el request body se envie email, password y username 

    try {
            const newUser = new User({   //se crea un objeto que peude ser alterado y guardado despues 
        username,
        email,
        password
    });  

    const userSaved = await newUser.save()  //se va a guardar en un userSaved, el cual va a ser devuelto en res.json
    res.json(userSaved)
    } catch (error) {
        console.log ('no se pudo')  //en caso de que haya un error, se muestra que no se pudo registrar
    }



}
export const login = (req, res ) => res.send('login');
