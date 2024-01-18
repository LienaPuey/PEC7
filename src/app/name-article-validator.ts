import { AbstractControl } from "@angular/forms";

export class NameArticleValidator {
    static test(control: AbstractControl){
        let value = control.value;
        let valueLower = value.toLowerCase();
        if(valueLower == 'prueba' || valueLower == 'test' || valueLower == 'mock' || valueLower == 'fake'){
          return {test : true};
        }
        return null;
    }
}
