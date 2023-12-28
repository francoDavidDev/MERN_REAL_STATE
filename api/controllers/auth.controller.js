import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req,res)=>{
    const {username,email, password} =req.body;
    //para encriptar la contraseña
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});

    //para que tire un mensaje por si un user esta repetido
    try{

        await  newUser.save();
        res.status(201).json('User created succesfully');
    }catch(error){
        res.status(500).json(error.message)
    }
       
}