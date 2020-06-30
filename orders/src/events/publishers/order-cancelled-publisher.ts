import { Publisher, OrderCancelledEvent, Subjects } from '@picktix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}