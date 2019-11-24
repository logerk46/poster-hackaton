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

    allSum: number;

    counter = Array;

    constructor(
        private apiService: ApiService,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.orderObject =
            {
                "order_id": 30139,
                "transaction_id": 1484233370643,
                "date_open": 1484233375235,
                "payed_sum": 633,
                "products": [
                    {
                        "product_name": "Венский суп Гуляш",
                        "price": 85
                    },
                    {
                        "product_name": "Венский суп Гуляш",
                        "price": 85
                    },
                    {
                        "product_name": "Фильтр кофе",
                        "price": 25
                    },
                    {
                        "product_name": "Медальоны из телятины с овощами гриль",
                        "price": 240
                    },
                    {
                        "product_name": "Хлеб белый собственной выпечки",
                        "price": 15
                    },
                    {
                        "product_name": "Кальян",
                        "modificator_name": "на соке",
                        "price": 150
                    },
                    {
                        "product_name": "Соус BBQ к блюду",
                        "price": 15
                    },
                    {
                        "product_name": "Pepsi 300 ml",
                        "price": 18
                    }
                ]
            },
            this.blocks = [];
        this.allSum = this.orderObject['payed_sum'];
        this.apiService.getOpenCheck('1')
            .subscribe(
                resp => {
                    console.log(resp);
                }
            )
    }

    ngOnInit(): void {

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

        }

        this.openDialog();
    }

    openDialog() {
        const dialogConf = new MatDialogConfig();

        dialogConf.autoFocus = true;
        dialogConf.width = "60%";
        this.dialog.open(CheckoutModalComponent, dialogConf);
    }
}