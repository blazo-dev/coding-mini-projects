import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-card-list',
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  products = input.required<Product[]>();
}
