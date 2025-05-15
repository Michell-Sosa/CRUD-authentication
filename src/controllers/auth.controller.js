import User from '../models/user.model.js'  //se importa el modelo de user
import bcrypt from 'bcryptjs' //se importa modulo bcryptjs para encriptar contrase;a
import {createAccessToken} from '../libs/jwt.js' //importando jwt para la creacion del token 



//exportando const register que tendra un request y un response
export const register = async  (req, res ) => {
    const {email, password, username} = req.body // se espera que para el request body se envie email, password y username 

    try {

        const passwordHash = await bcrypt.hash(password, 10) //aqui se esta pidiendo a bcrypt que encripte password brindando 10 caracteres
        //esto se guardara en la constante hash

            const newUser = new User({   //se crea un objeto que peude ser alterado y guardado despues 
        username,
        email, 
        password: passwordHash,
    });  

    const userSaved = await newUser.save()  //el usuario se va a guardar en un userSaved
    const token = await createAccessToken({id: userSaved._id}) //se crea el token y se pasa el valor que se quiere guardar (solo el id)
        res.cookie('token', token)   //en este caso el token se guardara en una cookie
        res.json({   //aqui se especifica cuales valores tendran que ser devueltos para ser usados por el frontend 
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createdAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt,
    });
    } catch (error) {
        res.status(500).json ({ message: error.message});
    }



}
export const login = (req, res ) => res.send('login');
