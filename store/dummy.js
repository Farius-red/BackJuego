const db = {
    'user': [
        { id: '1', name: 'daniel' },
    ],
}


async function list(table) {
    return db[table] || [];
}
async function get(table, id) {
    let Col = await list(table);
    return Col.filter(item => item.id === id)[0] || null;
}

async function update(table, data) {
    if (!db[table]) {
        db[table] = [];
    }
    db[table].push(data);

    console.log(db);
}

async function remove(table, id) {
    return true
}

async function query(table, q) {
    let Col = await list(table);

    let keys = Object.keys(q);
    let key = keys[0];

    return Col.filter(i => i[key] === q[key])[0] || null;
}


module.exports = {
    list,
    get,
    update,
    query,
}