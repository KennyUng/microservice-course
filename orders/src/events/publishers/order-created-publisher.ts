import { Publisher, OrderCreatedEvent, Subjects } from '@picktix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}