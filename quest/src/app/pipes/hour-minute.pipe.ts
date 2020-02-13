import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'hourMinute' })
export class HourMinutePipe implements PipeTransform {

  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    return ((hours > 0) ? hours + 'h' : '')  + ((min > 0) ? ' ' + min + 'm' : '');
  }
}

