import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: any, context?: string): void;
  log(message: any, ...optionalParams: [...any, string?]): void;
  log(message: unknown, context?: unknown, ...rest: string[]) {
    return rest;
  }
}
