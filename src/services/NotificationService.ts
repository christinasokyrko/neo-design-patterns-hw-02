import { Notifier } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService {
  constructor(private notifiers: Notifier[]) {}

  notify(user: User, message: string): void {
    for (const notifier of this.notifiers) {
      notifier.send(user, message);
    }
  }
}
