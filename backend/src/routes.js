const express = require('express');

const EntidadesController = require('./controllers/EntidadesController');
const OcorrenciasController = require('./controllers/OcorrenciasController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create );

routes.get('/entidades', EntidadesController.index );
routes.post('/entidades', EntidadesController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ocorrencias', OcorrenciasController.index);
routes.post('/ocorrencias', OcorrenciasController.create);
routes.delete('/ocorrencias/:id', OcorrenciasController.delete);

module.exports = routes;  // exportar uma variável de dentro de um arquivo