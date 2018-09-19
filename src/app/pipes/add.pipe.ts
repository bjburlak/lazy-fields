import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {
  transform(value: string): any {
    const currentValue = value ? parseInt(value, 10) + 1 : null;
    return currentValue && currentValue < 10 ? `0${currentValue}` : currentValue;
  }
}
