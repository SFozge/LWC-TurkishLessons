import { LightningElement } from 'lwc';

export default class OninputOrnegi extends LightningElement {
    isim = "Emin"; 

    handleInput(event){ //event variable'dir
        this.isim = event.target.value; //html'de ki input'a girilen degeri js'teki isim degiskenine yukledik
    }
}