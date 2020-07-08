import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import {loadStyle, loadScript} from 'lightning/platformResourceLoader';

export default class SimpleLightboxExample extends LightningElement {

    slLoaded= false;

    renderedCallback(){
        if(!this.slLoaded){
        Promise.all([
            loadStyle(this, SL+'/simpleLightbox/dist/simpleLightbox.css'),
            loadScript(this, SL+'/simpleLightbox/dist/simpleLightbox.js')
        ]).then(() =>{
            this.slLoaded= true;
        }).catch((error)=>{
            console.error('Could not initilize simple light box =', error);
        });


    }
    }

    openGallary(){
        SimpleLightboxExample.open({
            item: []
        });
    }

}