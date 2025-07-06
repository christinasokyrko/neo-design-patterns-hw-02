import { Notifier, LoggerInterface } from "../core/interfaces";

export class PushNotification implements Notifier {
  constructor(private logger: LoggerInterface) {}

  send(user: { deviceToken: string }, message: string): void {
    this.logger.log(`Sending PUSH to ${user.deviceToken}`);
    console.log(`Push sent to ${user.deviceToken}: ${message}`);
  }
}
