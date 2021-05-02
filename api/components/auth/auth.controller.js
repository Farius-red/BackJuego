
const TABLA = 'auth';

module.exports = function (injectStore) {
    let store = injectStore;
    if (!store) {
        store = require('../../../store/dummy');
    }


    async function login(username, clave) {
        const data = await store.query(TABLA, { username: username });
        if (data.clave === clave) {
            // generar token;  
            return 'token'
        } else {
            throw new Error('Informacion invalida');
        }

    }
    function update(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.clave) {
            authData.clave = data.clave;

        }

        return store.update(TABLA, authData);
    }
    return {
        update,
        login,
    }
};