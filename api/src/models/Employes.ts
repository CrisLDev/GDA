import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    name: String,
    last: String,
    position: String,
    email: String,
    age: String,
    date: Date,
    direction: String,
    dateRegister: {type: Date, default: Date.now},
    dni: Number,
    city: String,
    profile: String  
});

interface IEmploye extends Document{
    name: string;
    last: string;
    position: string;
    email:string;
    age: string;
    date: Date;
    direction: string;
    dateRegister: Date,
    dni: number;
    city: string;
    profile: string;
}

export default model<IEmploye>('Employe', schema);