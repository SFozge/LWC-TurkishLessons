import { LightningElement } from 'lwc';

export default class NameUpperGetter extends LightningElement {
    fName = "sema";
    lName = "sayin";

    get fullUpper(){ //getter Fonksiyonu- bunlarda return oluyor
        return this.fName.toUpperCase() + ' ' + this.lName.toUpperCase();

    }
}