import {Router} from 'express';

import {createEmploye, getEmployes, getEmploye, deleteEmploye, updateEmploye} from '../controllers/employe.controller';

import {createMachinery, getMachineries, getMachinery, deleteMachinery, updateMachinery} from '../controllers/machinery.controller';

import multer from '../libs/multer';
import { createSchedule, getSchedules, getSchedule, updateSchedule } from '../controllers/schedule.controller';

const router = Router();

// Employes

router.route('/employes')
    .get(getEmployes)
    .post(multer.single('image'), createEmploye);

router.route('/employes/:id')
    .get(getEmploye)
    .delete(deleteEmploye)
    .put(multer.single('image'), updateEmploye);

// Machineries

router.route('/machineries')
    .get(getMachineries)
    .post(multer.single('image'), createMachinery);

router.route('/machineries/:id')
    .get(getMachinery)
    .delete(deleteMachinery)
    .put(multer.single('image'), updateMachinery);

// Schedules

router.route('/schedules')
    .get(getSchedules)
    .post(createSchedule);

router.route('/schedules/:id')
    .get(getSchedule)
    .put(updateSchedule);


export default router;