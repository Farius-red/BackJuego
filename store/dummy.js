const db = {
    'user': [
        { id: '1', name: 'daniel' },
    ],
}


async function list(table) {
    return db[table];
}
async function get(table, id) {
    let Col = await list(table);
    return Col.filter(item => item.id === id)[0] || null;
}

async function update(table, data) {
    db[collection].push(data);
}

async function remove(tabla, id) {
    return true
}


module.exports = {
    list,
    get,
    update,
}