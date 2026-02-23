import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Donut } from '../../models/donut.model'
import { DonutCardComponent } from "../../components/donut-card/donut-card.component";

@Component({
    selector: 'app-donut-list',
    imports: [DonutCardComponent, CommonModule],
    template: `
      <div>
        @if (donuts.length) {
          @for (
            donut of donuts;
            track donut.id;
            let i = $index;
            let isOdd = $odd;
            let isEven = $even
          ) {
            <app-donut-card [donut]="donut"></app-donut-card>
          }
        } @else {
          <p>No Donuts here...</p>
        }
      </div>
    `,
    styles: [],
    standalone: true
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
