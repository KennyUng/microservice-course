import { Subjects, Publisher, ExpirationCompleteEvent } from '@picktix/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
};