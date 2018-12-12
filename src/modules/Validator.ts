import langService from '../service/LangService/LangService';

class Validator {
    private readonly checkConfig: object;
    constructor() {
         this.checkConfig = {
            loginMin: (value: string) => /.{3}/.test(value),
            loginMax: (value: string) => !/.{21}/.test(value),
            passwordMin: (value: string) => /.{8}/.test(value),
            passwordMax: (value: string) => !/.{21}/.test(value),
            email: (value: string) => /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i.test(value),
            russian: (value: string) => !/[а-яё]/i.test(value),
        };
    }

    public getError(value: string, check: string): string {
       if (this.checkConfig[check](value)) {
           return langService.getWord(`validator.${check}`);
       }
       return '';
    }

    // isValid() {
    //     let formIsValid = true;
    //     Object.keys(this.inputs).forEach((name) => {
    //         formIsValid = formIsValid && this.checkInput(name);
    //     });
    //     return formIsValid;
    // }
    //
    // test(value, check) {
    //     return this.checkConfig[check](value);
    // }
}

export default new Validator();
