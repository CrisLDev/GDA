import {Schema, model, Document} from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    employe_id: {type: ObjectId, ref: 'Employe'},
    machinery_id: {type: ObjectId, ref: 'Machinery'},
    dateRegister: {type: Date, default: Date.now},
    name: String,
    startDate: String,
    endDate: String,
    place: String,
    description: String
});

interface ISchedule extends Document{
    employe_id: any,
    machinery_id: any,
    dateRegister: Date,
    name: string,
    startDate: Date,
    endDate: Date,
    place: string,
    description: string
}

export default model<ISchedule>('Schedule', schema);