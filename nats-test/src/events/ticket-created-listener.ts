import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { Subjects } from "./subject";
import { TicketCreatedEvent } from "./ticket-created-event";

export class TicketCreatedListener extends Listener<TicketCreatedEvent>{
  readonly subject = Subjects.TicktedCreated;
    queueGroupName: string = "payments-service";
    onMessage(data: TicketCreatedEvent['data'], msg: Message): void {
        console.log("Event data!",data);
        console.log(data.id);
        console.log(data.price);
        console.log(data.title);
        msg.ack();
    }
}