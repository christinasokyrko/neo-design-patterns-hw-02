import { Notifier, LoggerInterface } from "../core/interfaces";

export class SMSNotification implements Notifier {
  constructor(private logger: LoggerInterface) {}

  send(user: { phone: string }, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    console.log(`SMS sent to ${user.phone}: ${message}`);
  }
}
