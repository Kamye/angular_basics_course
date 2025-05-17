import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/donut.model'

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <app-donut-card [donut]="donuts[0]"></app-donut-card>
      <app-donut-card [donut]="donuts[1]"></app-donut-card>
      <app-donut-card [donut]="donuts[2]"></app-donut-card>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {
  }

  ngOnInit() {
    this.donuts = [
      {
        id: '1456245',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.'
      },
      {
        id: '7894568',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 167,
        promo: true,
        description: 'For the glaze enjoy.'
      },
      {
        id: '5648478',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 109,
        description: 'For the people who like caramel.'
      }
    ];
  }
}
