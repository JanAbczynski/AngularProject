import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true};
        return null;
    } 

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{

        let test: any;



        // TA WERSJA DZIAŁA ALE NIE MA TIMEOUT

        // test = new Promise((resolve, reject) => {
        //        if (control.value === 'john')
        //             resolve({shouldBeUnique : true});
        //         else 
        //             resolve(null); 

        // });





        // PO DODATNIU TIMEOUT NIE DZIAŁA JAK NALEŻY

        test = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'john')
                    resolve({shouldBeUnique : true});
                else 
                    resolve(null);       
            }, 2000);

        });





        console.log(test.__zone_symbol__value)

        return test.__zone_symbol__value;
    }



}