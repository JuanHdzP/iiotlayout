import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ERROR_MESSAGES } from './error-messages';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  invalidClass(control: AbstractControl | null): string {
    if (this.isInvalid(control)) {
      return 'input-warning-o ';
    }

    return '';
  }

  isInvalid(control: AbstractControl | null): boolean {
    if (control) {
      return control.invalid && (control.touched || control.dirty);
    }
    return false;
  }

  handleError(control: AbstractControl | null): string {
    let errorCode: string;
    let meta: any;
    let msg: string = 'El campo es invalido';
    if (control) {
      if (control.errors) {
        errorCode = Object.keys(control.errors)[0];
        meta = Object.values(control.errors)[0];
        if (errorCode) {
          Object.keys(ERROR_MESSAGES).forEach((key) => {
            if (key == errorCode) {
              msg = ERROR_MESSAGES[errorCode](meta);
            }
          });
        }
      }
    }
    return msg;
  }

  setControlError(
    control: AbstractControl | null,
    errorName: string,
    meta?: any
  ) {
    if (control) {
      control.setErrors({ [errorName]: meta ? meta : true });
    }
  }

  handleServerErrors(serverErrors: string[], formGroup: FormGroup) {
    serverErrors.forEach((error) => {
      this.getFieldAndCode(error, formGroup);
    });
  }

  getFieldAndCode(error: string, formGroup: FormGroup) {
    const fieldError: string[] = error.split('.', 3);
    if (fieldError.length === 2 || fieldError.length === 3) {
      const control = fieldError[0];
      const errorCode = fieldError[1];
      const meta = fieldError[2];
      let metaFormatted = null;
      if (errorCode === 'minlength' || errorCode === 'maxlength') {
        metaFormatted = { requiredLength: meta };
      }
      formGroup.markAllAsTouched();
      if (formGroup.get([control])) {
        this.setControlError(formGroup.get(control), errorCode, metaFormatted);
      }
    }
  }
}
