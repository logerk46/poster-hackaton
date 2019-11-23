import { Component, OnInit, OnDestroy } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'check-view',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class CheckOrderComponent implements OnInit, OnDestroy {
    orderObject;
    userCount: number;
    blocks;

    allSum: number;

    counter = Array;

    constructor() {
        this.orderObject = {
            payed_sum: 875,
            products: [
                {
                    name: 'Кофе Фильтр',
                    price: '25',
                    count: 1
                },
                {
                    name: 'Тарт Лимонный',
                    price: '45',
                    count: 1
                },
                {
                    name: 'Чай зеленный',
                    price: '37',
                    count: 1
                },
                {
                    name: 'Лапша',
                    price: '120',
                    count: 2
                },
                {
                    name: 'Кофе Фильтр',
                    price: '25',
                    count: 1
                },
                {
                    name: 'Тарт Лимонный',
                    price: '45',
                    count: 1
                },
                {
                    name: 'Чай зеленный',
                    price: '37',
                    count: 1
                },
                {
                    name: 'Лапша',
                    price: '120',
                    count: 1
                },
                {
                    name: 'Кофе Фильтр',
                    price: '25',
                    count: 1
                },
                {
                    name: 'Тарт Лимонный',
                    price: '45',
                    count: 1
                },
                {
                    name: 'Чай зеленный',
                    price: '37',
                    count: 1
                },
                {
                    name: 'Лапша',
                    price: '120',
                    count: 1
                }
            ]
        }
        this.blocks = [];
        this.allSum = this.orderObject['payed_sum'];
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    createUserLists(userCount) {
        this.blocks = [];
        for (let i = 0; i < userCount; i++) {
            this.blocks.push([])
        }
        console.log(this.blocks);
    }

    drop(event: CdkDragDrop<any>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
            this.allSum -= event.container.data[event.currentIndex].price;
        }
      }
}