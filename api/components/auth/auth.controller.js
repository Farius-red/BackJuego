const bcryot = require('bcrypt');
const auth = require('../../../auth');

const TABLA = 'auth';

module.exports = function (injectStore) {
    let store = injectStore;
    if (!store) {
        store = require('../../../store/dummy');
    }


    async function login(username, clave) {
        const data = await store.query(TABLA, { username: username });
         return bcryot.compare(clave, data.clave)
         .then(sonIguales =>{
            if (sonIguales === true ) {
                // generar token;  
                return auth.sign(data);
            } else {
                throw new Error('Informacion invalida');
            }
         });

         
       

    }
  async  function update(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.clave) {
            authData.clave = await bcryot.hash(data.clave, 5);

        }

        return store.update(TABLA, authData);
    }
    return {
        update,
        login,
    }
};