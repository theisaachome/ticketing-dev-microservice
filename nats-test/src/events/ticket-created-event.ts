import { Subjects } from "./subject";

export interface TicketCreatedEvent{
    subject:Subjects.TicktedCreated;
    data:{
        id:string;
        title:string;
        price:number;
    };
}