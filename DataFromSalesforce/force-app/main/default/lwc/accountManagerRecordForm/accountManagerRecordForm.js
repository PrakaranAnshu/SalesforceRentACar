import { LightningElement, api } from 'lwc';

export default class AccountManagerRecordForm extends LightningElement {

    @api recordId;
    @api objectApiName;

    handleSuccess(event) {

        this.recordId = event.detail.id;

    }

}