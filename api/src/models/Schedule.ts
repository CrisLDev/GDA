import {Schema, model, Document} from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    employe_id: ObjectId,
    machinery_id: ObjectId,
    dateRegister: {type: Date, default: Date.now},
    name: String,
    startDate: String,
    endDate: String,
    place: String,
    description: String
});

interface ISchedule extends Document{
    employe_id: string,
    machinery_id: string,
    dateRegister: Date,
    name: string,
    startDate: Date,
    endDate: Date,
    place: string,
    description: string
}

export default model<ISchedule>('Schedule', schema);