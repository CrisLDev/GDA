export interface Employe{
    _id: string;
    name: string;
    last: string;
    email: string;
    age: string;
    date: Date;
    direction: string;
    dni: number;
    city: string;
    profile: string;
}

export interface EmployeAdd{
    _id: string;
    name: string;
    last: string;
    email: string;
    age: string;
    date: Date;
    direction: string;
    dni: number;
    city: string;
    profile: File;
}