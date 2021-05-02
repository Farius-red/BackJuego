const express = require('express');

const router = express.Router();
const resp = require('../../../network/response');

const Controller = require('./index');


// funciones de rutas 
function list(req, res) {
    Controller.list()
        .then((lista) => {
            resp.success(req, res, lista, 200);
        })
        .catch((err) => {
            resp.error(req, res, err.message, 500);
        });
}


function get(req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            resp.success(req, res, user, 200);
        })
        .catch((err) => {
            resp.error(req, res, err.message, 500);
        });

}

function update(req, res) {
    Controller.update(req.body)
        .then((user) => {
            resp.success(req, res, user, 200);
        })
        .catch((err) => {
            resp.error(req, res, err.message, 500);
        });
}

// rutas 
router.get('/', list)
router.get('/:id', get)
router.post('/', update);
router.put('/', update)




module.exports = router;