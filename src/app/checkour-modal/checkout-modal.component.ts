import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'checkout-modal',
    templateUrl: './checkout-modal.component.html'
})
export class CheckoutModalComponent {
    selectedPayment;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any){
        
    }


    choosePayment(payNumb): void {
        this.selectedPayment = payNumb;
    }
}