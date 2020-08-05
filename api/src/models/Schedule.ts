import {Schema, model, Document} from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    dateRegister: {type: Date, default: Date.now},
    startDate: String,
    endDate: String,
    place: String,
    description: String
});

interface ISchedule extends Document{
    employe_id: string,
    machinery_id: string,
    dateRegister: Date,
    startDate: string,
    endDate: string,
    place: string,
    description: string
}

export default model<ISchedule>('Schedule', schema);