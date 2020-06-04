import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (request, response) => {
    response.json({ message: 'Endpoint Working - API Sucefull!' });
});

// Rotas de items
routes.get('/items', itemsController.index);
// Rotas de Points
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;