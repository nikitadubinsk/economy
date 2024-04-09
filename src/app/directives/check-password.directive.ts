import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password1 = control.get('password1')?.value;
  const password2 = control.get('password2')?.value;

  return password1 === password2 ? null : { checkPassword: true };
};
