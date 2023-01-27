import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class CustomUppercasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }
}
