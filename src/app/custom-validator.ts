import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
// return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];

//     // if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//     //     // return if another validator has already found an error on the matchingControl
//     //     return;
//     // }

//     // set error on matchingControl if validation fails
//     if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ mustMatch: true });
//     } else {
//         matchingControl.setErrors(null);
//     }
// }

export class CustomValidators {
  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const passConfirm: string = control.get('passConfirm').value; // get password from our passConfirm form control
    // compare is the password math
    if (password !== passConfirm) {
      // if they don't match, set an error in our passConfirm form control
      control.get('passConfirm').setErrors({ NoPassswordMatch: true });
    }
  }
}
