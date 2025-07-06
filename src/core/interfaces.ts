export interface Notifier {
  send(user: { email: string; phone: string; deviceToken: string }, message: string): void;
}

export interface LoggerInterface {
  log(message: string): void;
}