import { Publisher } from "./base-publisher";
import { Subjects } from "./subject";
import { TicketCreatedEvent } from "./ticket-created-event";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject= Subjects.TicktedCreated;

}