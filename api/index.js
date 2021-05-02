const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const config = require('../config.js');
const app = express();


const user = require('./components/user/network')

app.use(bodyParser.json());
const swaggerDoc = require('./swagger.json');

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//router 
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('api escuchando en el puerto', config.api.port);
});