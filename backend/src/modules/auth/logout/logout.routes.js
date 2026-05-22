import { Router } from 'express';
import { logoutController } from './logout.controller.js';
import { authMiddleware } from '../../../middleware/middleware.js';

const router = Router();

router.post('/', authMiddleware, logoutController);

export default router;
