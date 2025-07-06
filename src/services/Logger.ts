import { LoggerInterface } from "../core/interfaces";

export class Logger implements LoggerInterface {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}