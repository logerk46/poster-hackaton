import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'checkout-order',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutOrderComponent implements OnInit {
    checkList;
    constructor() {
        this.checkList =
            {
                "response": [
                    {
                        "transaction_id": 1,
                        "payed_sum": 170,
                        "products": [
                            {
                                "product_name": "Filtr kofe",
                                "price": 321
                            },
                            {
                                "product_name": "Borjomi 0.5l",
                                "price": 93
                            },
                        ]
                    },
                    {
                        "transaction_id": 2,
                        "payed_sum": 33,
                        "products": [
                            {
                                "product_name": "Filtr kofe",
                                "price": 15
                            },
                            {
                                "product_name": "Pepsi 300 ml",
                                "price": 18
                            }
                        ]
                    },
                    {
                        "transaction_id": 3,
                        "payed_sum": 430,
                        "products": [
                            {
                                "product_name": "Tart limonniy",
                                "price": 25
                            },
                            {
                                "product_name": "Tortik napoleon",
                                "price": 240
                            },
                            {
                                "product_name": "Croissant with chocolate",
                                "price": 15
                            },
                        ]
                    }
                    
                ]
            }
    }

    ngOnInit(): void {

    }
}