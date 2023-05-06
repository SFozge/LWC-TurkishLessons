import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    flag = true;
    display = false;

    handleChange(event){
        this.display = event.target.checked;
    }
}