const nanoid = require('nanoid');
const auth = require('../auth');

const TABLE = 'user';



module.exports = function (injectStore) {
    let store = injectStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
    function list() {
        return store.list(TABLE);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

   async function update(body) {
        const user = {
            name: body.name,
            username: body.username,
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        if (body.clave || body.username) {
            await auth.update({
                id: user.id,
                username: user.username,
                clave: body.clave,
            })
        }

        return store.update(TABLE, user);
    }
    return {
        list,
        get,
        update,
    };
};