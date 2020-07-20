import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    name: String,
    last: String,
    direction: String,
    dni: Number,
    city: String,
    profile: String  
});

interface IEmploye extends Document{
    name: string;
    last: string;
    direction: string;
    dni: number;
    city: string;
    profile: string;
}

export default model<IEmploye>('Employe', schema);