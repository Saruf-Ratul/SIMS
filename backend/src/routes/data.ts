import { Router } from 'express';
import { saveData, fetchData } from '../controllers/dataController';

const router = Router();

router.post('/save', saveData);
router.get('/', fetchData);

export default router;
