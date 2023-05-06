import { LightningElement } from 'lwc';

export default class OnchangeOrnegi extends LightningElement {
    isimSoyisim;

    handlerOnchange(event){
        this.isimSoyisim = event.target.value;

    }
}