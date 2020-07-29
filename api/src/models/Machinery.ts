import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    name: String,
    brand: String,
    weight: String,
    status: String,
    dateRegister: {type: Date, default: Date.now},
    description: String,
    image: String
});

interface IMachinery extends Document{
    name: string,
    brand: string,
    weight: string,
    status: string,
    dateRegister: Date,
    description: string,
    image: string
}

export default model<IMachinery>('Machinery', schema);