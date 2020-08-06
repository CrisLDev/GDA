import {Request, Response} from 'express';

import Schedule from '../models/Schedule';

export async function getSchedules(req: Request, res: Response): Promise<Response>{
    const schedules = await Schedule.find().populate('employe_id', 'name').populate('machinery_id','name');

    return res.json(schedules);
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

    await schedule.save();

    return res.json({
        message: 'Schedule saved successfully',
        schedule
    })
}