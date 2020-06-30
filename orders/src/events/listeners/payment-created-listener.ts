import { Subjects, Listener, PaymentCreatedEvent, OrderStatus } from '@picktix/common';
import { queueGroupName } from '../../../../payments/src/events/listeners/queue-group-name';
import { Message } from 'node-nats-streaming';
import { Order } from '../../../../payments/src/models/order';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
    queueGroupName = queueGroupName;

    async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
        const order = await Order.findById(data.orderId);

        if(!order) {
            throw new Error('Order Not Found');
        }

        order.set({
            status: OrderStatus.Complete
        });
        await order.save();

        msg.ack();
    }
}