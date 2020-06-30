import { Publisher, Subjects, TicketUpdatedEvent } from '@picktix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

}