import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Logger } from './logger.service';
import { DatePipe } from '@angular/common';

export let isDebugMode = environment.isDebugMode;

const noop = (): any => undefined;

@Injectable()
export class ConsoleLoggerService implements Logger {

  constructor(private datePipe:DatePipe){}
    transformDate(){
      var date = new Date();
     return this.datePipe.transform(date,'yyyy-mm-dd:HH:ss:mm');
    
  }

  get info() {
    if (isDebugMode) {
      return console.info.bind(console,this.transformDate());
    } else {
      return noop;
    }
  }

  get warn() {
    if (isDebugMode) {
      return console.warn.bind(console,this.transformDate());
    } else {
      return noop;
    }
  }

  get error() {
    if (isDebugMode) {
      return console.error.bind(console,this.transformDate());
    } else {
      return noop;
    }
  }
  
  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: Function = (console)[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
}