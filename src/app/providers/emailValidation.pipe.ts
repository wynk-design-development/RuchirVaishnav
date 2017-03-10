import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'emailValidation'})
export class EmailValidation implements PipeTransform {

  verifyEmail($value){
    let atRateOf = $value.includes('@');
    let period = $value.includes('.');
    if(atRateOf === true && period === true) {
      return null;
    } else {
      return `Invalid Email`;
    }
  }

  transform(value: any, args?: any): any {
    return this.verifyEmail(value);
  }
}
