import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { CardListComponent } from "./components/card-list/card-list.component";
import { ButtonComponent } from "./components/button/button.component";
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeroComponent, CardListComponent, ButtonComponent, CommonModule]
})
export class AppComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  products: Product[] = [];
  shownProducts: Product[] = [];


  showAvailable = false;

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.shownProducts = this.products;
    });
  }

  showAllProducts(): void {
    this.showAvailable = false;
    this.shownProducts = this.products;
  }

  showAvailableProducts(): void {
    this.showAvailable = true;
    this.shownProducts = this.products.filter(({ available }) => available);
  }
}
