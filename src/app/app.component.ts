import { Component } from '@angular/core';
import { Card } from "src/app/model/card.model";
import { CardsService } from "src/app/service/card.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Card[];
  constructor(protected cardsService: CardsService) {
    this.products = cardsService.getCards();
  }
}