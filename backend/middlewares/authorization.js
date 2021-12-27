const jwt = require('jsonwebtoken');
const config = require('../config/auth');

module.exports = () => {
    return (req, res, next) => {
        const token = req.headers['authorization'];

        if(!token) {
            return res.status(401).json( "Access denied." );
        } else {
            const tokenBody = token.slice(7);
            jwt.verify(tokenBody, config.JWT_SECRET, (err, decoded) => {
                if (err){
                    console.log('JWT Error')
                    return res.status(401).json("Access denied.");
                }
                
                next();
                
                    /*
                else if (role === decoded.role)
                    next();
                else
                    return res.status(401).json("Access denied.");
                */
            })
        }
    }
}