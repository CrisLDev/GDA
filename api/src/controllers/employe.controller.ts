import {Request, Response} from 'express';

import path from 'path';

import fs from 'fs-extra';

import Employe from '../models/Employes';

export async function getEmployes(req: Request, res:Response): Promise<Response> {
    const employes = await Employe.find();

    return res.json(employes);
};

export async function getEmploye(req: Request, res:Response): Promise<Response> {
    const employe = await Employe.findById(req.params.id);

    return res.json(employe);
};

export async function createEmploye(req: Request, res:Response): Promise<Response> {
    const {name, last, email, age, date, direction, dni, city} = req.body;

    const newEmploye = {
        name: name,
        last: last,
        email: email,
        age: age,
        date: date,
        direction: direction,
        dni: dni,
        city: city,
        profile: req.file.path
    };

    const employe = new Employe(newEmploye);

    await employe.save();

    return res.json({
        message:'Employe successfully saved',
        employe
    })
};

export async function deleteEmploye(req: Request, res:Response): Promise<Response> {
    const employe = await Employe.findByIdAndRemove(req.params.id);
    if (employe){
        fs.unlink(path.resolve(employe.profile));
    }
    return res.json({
    message: 'Employe deleted',
    employe
});
};

export async function updateEmploye(req: Request, res:Response): Promise<Response> {
    const {name, last, email, age, date, direction, dni, city} = req.body;

    const editData = {
        name, 
        last, 
        email, 
        age, 
        date, 
        direction, 
        dni,
        city
    }

    if(req.file){
        Object.assign(editData, {profile: req.file.path});
    }

    const updatedEmploye = await Employe.findByIdAndUpdate(req.params.id, editData, {new: true});

    return res.json(updatedEmploye);
};