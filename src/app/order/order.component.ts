import { Component, OnInit, OnDestroy } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CheckoutModalComponent } from '../checkour-modal/checkout-modal.component';

@Component({
    selector: 'check-view',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class CheckOrderComponent implements OnInit, OnDestroy {
    orderObject;
    userCount: number;
    blocks;

    partPayments: boolean = false;
    doPartPayments: boolean = false;

    loadChecks: boolean = false;

    allSum: number;

    counter = Array;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.blocks = [];
        this.apiService.getOpenCheck('1')
            .subscribe(
                resp => {
                    this.orderObject = resp[0];
                    this.loadChecks = true;
                    console.log(this.orderObject);
                }
            )

    }

    ngOnInit(): void {
        if (this.loadChecks) {
            this.allSum = this.orderObject['check_sum'];
        }
    }

    ngOnDestroy(): void {

    }

    createUserLists(userCount) {
        this.doPartPayments = true;
        this.blocks = [];
        for (let i = 1; i <= userCount; i++) {
            this.blocks.push({
                products: [],
                sum: 0
            })
        }
    }

    drop(event: CdkDragDrop<any>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            if (event.previousContainer.id === 'order-product-list') {
                // вычитаем из главной 
                this.allSum -= event.previousContainer.data[event.previousIndex].price;
            } else {
                // подсчет денег 
                //  this.blocks[event.previousIndex].sum -= event.container.data.sum;
                // console.log(event.previousIndex);
                //  console.log(this.blocks[event.currentIndex].products[event.previousIndex]);
                // this.blocks[event.previousIndex].sum -= event.container.data.price;
            }
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
            // this.blocks[event.currentIndex].sum += this.blocks[event.currentIndex].products[event.currentIndex].price;

        }
    }

    makePayment(): void {
        if (this.partPayments) {
            this.router.navigate(['/checkout']);
        } else {
            this.openDialog();
        }
    }

    openDialog() {
        const dialogConf = new MatDialogConfig();

        dialogConf.autoFocus = true;
        dialogConf.width = "60%";
        this.dialog.open(CheckoutModalComponent, dialogConf);
    }
}