import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'
    
export function createAccessToken(payload) {   //se exporrta para poder utilizarla en otro lado
    return new Promise ((resolve, reject) => { //objeto global de node
        jwt.sign (      //si se ejecuta el resolve es porque todo termino bien, si se ejecuta el recject es porque termino todo mal 
        payload,
        TOKEN_SECRET,    //llave que se va a usar para crear el token 
    {
        expiresIn: '1d', //expira en un dia
    },
     (err, token) => {
        if (err) reject(err) //si hay un error, se ejecuta reject
            resolve (token)   //si todo termino bien, se ejecuta resolve 
        }
    );
})


    }