import { LightningElement } from 'lwc';

export default class Toplama extends LightningElement {
    num1;
    num2;

    get toplam(){
        return `${parseInt(this.num1) + parseInt(this.num2)}`;
    }
    handleNum1(event){
       this.num1 = event.target.value;
    }
    handleNum2(event){
       this.num2 = event.target.value;
    }
}