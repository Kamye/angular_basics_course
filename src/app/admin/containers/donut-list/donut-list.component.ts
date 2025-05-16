import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div>
        {{ donut.name }}
        {{ donut.price }}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: any[];
  donut!: any;

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

    this.donut = this.donuts[0];
  }
}
