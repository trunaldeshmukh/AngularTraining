import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Logic } from 'src/app/models/app.logic';
import { Product } from 'src/app/models/app.product';

// custom validator class must contain static metyhod
export class MyCustomValidator {
    // if the method is validated
    // then it will return null
    // else it will retun JSON object for
    // invalidation
    // AbstractControl --> represents HTML UI element
    // on which the validations are applied

    private logic: Logic;

    static checkEven(ctrl: AbstractControl): any {
        const val: number = parseInt(ctrl.value);
        if (val % 2 === 0) {
            return null;
        } else {
            return { noteven: true };
        }
    }

    static checkUniqueProductId(source: number[]): ValidatorFn {
        return (ctrl: AbstractControl): { [key: string]: boolean } | null => {
            const val: number = parseInt(ctrl.value, 10);
            if (source.includes(val)) {
                return { notunique: true };
            } else {
                return null;
            }
        };
    }

    static checkProductName(ctrl: AbstractControl): any {
        const val: string = ctrl.value;
        const regEx = new RegExp('^[A-Z]+((-|\s)*[A-z])*$');
        if (val && regEx.test(val)) {
            return null;
        } else {
            return { invalidproductname: true };
        }
    }
}
