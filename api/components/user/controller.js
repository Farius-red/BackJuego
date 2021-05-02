const nanoId = require('nanoid');

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

    function update(body) {
        const user = {
            name:  body.name,
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoId();
        }

        return store.update(TABLE, user);
    }
    return {
        list,
        get,
        update,
    };
};