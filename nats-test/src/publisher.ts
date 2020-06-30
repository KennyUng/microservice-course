import nats, { Stan } from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const client = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
});

client.on('connect', async () => {
    console.log('Publisher connected to NATS');

    const publisher = new TicketCreatedPublisher(client);
    try {
        await publisher.publish({
            id: '123',
            title: 'title',
            price: 20
        });
    } catch (err) {
        console.error(err);
    }


    // All data in NATS must be sent as a string, so we JSON.stringify the object prior to sending it
    // const data = JSON.stringify({
    //     id: '123',
    //     title: 'title',
    //     price: 20
    // });

    // // Third parameter is an optional callback function
    // // 'data' is often referred to as a 'message'
    // client.publish('ticket:created', data, () => {
    //     console.log('Event published');
    // });


});