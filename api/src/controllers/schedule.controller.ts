import {Request, Response} from 'express';

import Schedule from '../models/Schedule';

export async function createSchedule(req: Request, res: Response): Promise<Response>{
    const {employe_id, machinery_id, startDate, endDate, place, description} = req.body;

    const newSchedule = {
        employe_id: employe_id,
        machinery_id: machinery_id,
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