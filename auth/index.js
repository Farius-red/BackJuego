const jwt = require('jsonwebtoken');
const config = require('./config');
const secreto = config.jwt.secret;

function sign(data){
     return jwt.sign(data, secreto);
}

const check = {
  own: function(req, owner){
    const decoded = decodeHeader(req);
    console.log(decoded);
  }
}

function verify(token){
    return jwt.verify(token, secreto);
}
function getToken(auth){
    if(!auth){
        throw new Error('no llego token');
    }

    if(auth.indexOf('Bearer') === -1){
        throw new Error('formato indeseado del token');
    }
    let token = auth.replace('Bearer', '' );
    return token;
}

function decodeHeader(req){
        const authorization = req.headers.authorization || '';
        const token = getToken(authorization);
        const decoded = verify(token);

        req.user = decoded;

        return decoded;
}

module.exports ={
 sign,
 check
};