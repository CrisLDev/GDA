import {Request, Response} from 'express';

import path from 'path';

import fs from 'fs-extra';

import Machinery from '../models/Machinery';

export async function getMachineries(req: Request, res:Response): Promise<Response> {
    const machineries = await Machinery.find();

    return res.json(machineries);
};

export async function getMachinery(req: Request, res:Response): Promise<Response> {
    const machinery = await Machinery.findById(req.params.id);

    return res.json(machinery);
};

export async function createMachinery(req: Request, res:Response): Promise<Response> {
    const {name, brand, weight, status, description} = req.body;

    const newMachinery = {
        name: name, 
        brand: brand, 
        weight: weight, 
        status: status, 
        description: description,
        image: req.file.path
    };

    const machinery = new Machinery(newMachinery);

    await machinery.save();

    return res.json(machinery);
};

export async function deleteMachinery(req: Request, res:Response): Promise<Response> {
    const machinery = await Machinery.findByIdAndRemove(req.params.id);
    if (machinery){
        fs.unlink(path.resolve(machinery.image));
    }
    return res.json({
    message: 'Machinery deleted',
    machinery
});
};

export async function updateMachinery(req: Request, res:Response): Promise<Response> {
    const machinery = await Machinery.findById(req.params.id);

    const {name, brand, weight, status, description} = req.body;

    const editMachinery = {
        name: name, 
        brand: brand, 
        weight: weight, 
        status: status, 
        description: description,
    };

    if(req.file){
        Object.assign(editMachinery, {image: req.file.path});
        if(machinery){
            fs.unlink(path.resolve(machinery.image))
        }
    }

    const updatedMachinery = await Machinery.findByIdAndUpdate(req.params.id, editMachinery, {new: true});

    return res.json(updateMachinery);
};