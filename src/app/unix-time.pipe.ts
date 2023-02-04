import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTime'
})
export class UnixTimePipe implements PipeTransform {
  transform(value: string): string {
    const timestamp = parseInt(value, 10);
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
}
