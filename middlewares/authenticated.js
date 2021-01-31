const jwt = require('jsonwebtoken');
const UserController = require('../controllers/user');

exports.auth = (req, res , next) => {
    const key = UserController.key;
    let token = undefined;
    if (req.headers.authorization) {
        
        token = req.headers.authorization;

        jwt.verify(token, key, (err, payload) => {
            if (err) res.status(500).send(err);
            if (payload) {
                req.user = payload.user;
                req.user.password = undefined;
                next();
            }
        });

    } else {
        res.status(500).send({message: 'No existe la cabecera de autenticacion'});
    }

        
    

   
}


