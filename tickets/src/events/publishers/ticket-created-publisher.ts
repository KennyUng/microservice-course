import { Publisher, Subjects, TicketCreatedEvent } from '@picktix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;

}