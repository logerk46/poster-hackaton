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
                        "payed_sum": 256,
                        "products": [
                            {
                                "product_name": "Венский суп Гуляш",
                                "price": 85
                            },
                            {
                                "product_name": "Венский суп Гуляш",
                                "price": 85
                            },
                        ]
                    },
                    {
                        "transaction_id": 2,
                        "payed_sum": 56,
                        "products": [
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
                    {
                        "transaction_id": 3,
                        "payed_sum": 82,
                        "products": [
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
                        ]
                    }
                    
                ]
            }
    }

    ngOnInit(): void {

    }
}