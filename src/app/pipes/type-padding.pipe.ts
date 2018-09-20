import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typePadding'
})

export class TypePaddingPipe implements PipeTransform {
  transform(value: string): any {
    const currentValue = value ? parseInt(value, 10) : null;
    if (!currentValue) { return ''; }
    return currentValue < 10 ? `00${currentValue}` : `0${currentValue}`;
  }
}
