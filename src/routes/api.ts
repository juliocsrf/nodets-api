import { Router } from 'express';
import { json } from 'sequelize';

import * as ApiController from '../controllers/api.controller';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/name/:name', ApiController.name);

export default router;