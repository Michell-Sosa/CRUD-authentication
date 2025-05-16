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
export const login = async  (req, res ) => {
    const {email, password} = req.body // se espera que para el request body se envie email, password y username 

    try {

        const userFound = await User.findOne({email}) //en este caso se va a buscar por correo y userFound va a guardarlo si es que ya existe

        if (!userFound) return res.status(400).json({ message: 'User not found'}); //si no encuentra el mail entonces mostrara este mensaje


        const isMatch = await bcrypt.compare(password, userFound.password); //aqui se esta pidiendo a bcrypt que compare las password de la DB y del userFound

        if (!isMatch) return res.status(400).json ({ message: 'Invalid credentials'}); //si la respuesta es false, se muestra este mensaje

            
    const token = await createAccessToken({id: userFound._id});  //se va a guardar el id de userFound y crear el token con el
        res.cookie('token', token)   //en este caso el token se guardara en una cookie
        res.json({   //aqui se especifica cuales valores tendran que ser devueltos para ser usados por el frontend 
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
    } catch (error) {
        res.status(500).json ({ message: error.message});
    }



}


export const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}
