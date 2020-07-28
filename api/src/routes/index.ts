import {Router} from 'express';

import {createEmploye, getEmployes, getEmploye, deleteEmploye, updateEmploye} from '../controllers/employe.controller';

import multer from '../libs/multer';

const router = Router();

router.route('/employes')
    .get(getEmployes)
    .post(multer.single('image'), createEmploye);

router.route('/employes/:id')
    .get(getEmploye)
    .delete(deleteEmploye)
    .put(multer.single('image'), updateEmploye);

export default router;