const User = require('../models/user');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const bcrypt = require('bcrypt');
const key = 'Ahtziri0805'

async function register(req, res) {

    const body = req.body;
    let user = new User();

    user.name = body.name;
    user.surname = body.surname;
    user.email = body.email;
    user.userName = body.userName;
    user.role = false;
    user.createdAt = moment().format('DD-MM-YYYY');
    user.password = await hashPassword(body.password);
    console.log(user.password);
    
    user.save((err, savedUser) => {
        if(err) res.status(500).send({error: err});
        if(savedUser) return res.status(200).send({savedUser});
    })


}

function hashPassword(password){  
    return new Promise((resolve, reject)=>{
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(err);
            if (hash) resolve(hash);
        });
    })
}

async function login(req, res){
    const body = req.body;
    const email = body.email;
    const password = body.password;

    User.findOne({email:email}, (err, user)=>{
        if(err) res.status(404).send({error: err});
        if(user){
         bcrypt.compare(password, user.password, (err, match)=>{
             if(err) res.status(500).send(err);
             if (match) {
                 const token = jwt.sign({user}, key, { expiresIn: '7d' });
                 return res.status(200).send({token})
             }
         })
        }
    });
}



module.exports = {register, login, key}