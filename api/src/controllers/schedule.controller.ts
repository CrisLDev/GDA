import {Request, Response} from 'express';

import Schedule from '../models/Schedule';

export async function getSchedules(req: Request, res: Response): Promise<Response>{
    const schedules = await Schedule.find().populate('employe_id', 'name').populate('machinery_id','name');

    return res.json(schedules);
}

export async function getSchedule(req: Request, res: Response): Promise<Response>{
    const schedule = await Schedule.findById(req.params.id).populate('employe_id', 'name').populate('machinery_id','name');

    return res.json(schedule);
}

export async function createSchedule(req: Request, res: Response): Promise<Response>{
    const {employe_id, machinery_id, name, startDate, endDate, place, description} = req.body;

    const newSchedule = {
        employe_id: employe_id,
        machinery_id: machinery_id,
        name: name,
        startDate: startDate,
        endDate: endDate,
        place: place,
        description: description
    };

    const schedule = new Schedule(newSchedule);

    await schedule.save().then(schedule => schedule.populate('employe_id', 'name').populate('machinery_id','name').execPopulate());

    return res.json(schedule)
}

export async function updateSchedule(req: Request, res: Response): Promise<Response>{

    console.log(req.body)

    const {employe_id, machinery_id, name, startDate, endDate, place, description} = req.body;

    const editSchedule ={
        employe_id: employe_id._id,
        machinery_id: machinery_id._id,
        name: name,
        startDate: startDate,
        endDate: endDate,
        place: place,
        description: description
    }

    const schedule = await Schedule.findByIdAndUpdate(req.params.id, editSchedule, {new: true});

    return res.json(schedule);
}