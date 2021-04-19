import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';


console.clear();
const stan = nats.connect('ticketing','abc',{
    url:"http://localhost:4222",
});

stan.on('connect',async()=>{
    console.log('Publisher Connected to NATS');
    const publisher = new TicketCreatedPublisher(stan);
    await  publisher.publish(
        {
            id:'123',
            title:'Dream theater',
            price:200
        }
    );
    // const data =JSON.stringify({
    //     id:"123",
    //     title:"Concert",
    //     price:20
    // });

    // stan.publish('ticket:created',data,()=>{
    //     console.log("Event Published");
    // });

});