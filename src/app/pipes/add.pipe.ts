import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {
  transform(value: string): number {
    return value ? parseInt(value, 10) + 1 : null;
  }
}
