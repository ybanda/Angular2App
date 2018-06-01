import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export abstract class Logger {

    info: any;
    warn: any;
    error: any;
  }

@Injectable()
export class LoggerService implements Logger {

   
    warn: any;
    error: any;
    info:any;
    invokeConsoleMethod(type: string, args?: any): void {} 
}