const express = require('express');

const EntidadesController = require('./controllers/EntidadesController');
const OcorrenciasController = require('./controllers/OcorrenciasController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create );

//entidades, condominios, empresas
routes.get('/entidades', EntidadesController.index );
routes.post('/entidades', EntidadesController.create);

//minha página, painel de controle, principal
routes.get('/profile', ProfileController.index);

// ocorrencias, indicios, chamados  (crud)
routes.get('/ocorrencias', OcorrenciasController.index);
routes.post('/ocorrencias', OcorrenciasController.create);
routes.delete('/ocorrencias/:id', OcorrenciasController.delete);


module.exports = routes;  // exportar uma variável de dentro de um arquivo