import { FormControl } from '@angular/forms';

export class ValidatorService {
  nonValidAmount(control: FormControl): { [s: string]: boolean } {
    if (control.value < 0) {
      return { amountNotValid: true };
    }
    return null;
  }
}
