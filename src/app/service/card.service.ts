import { Injectable } from "@angular/core";
import { cardMock } from "src/app/mock/card.mock";
import { Card } from "src/app/model/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  private products: Card[] = cardMock;

  getCards(): Card[]{
    return this.products;
  }
  getCard(id: number): Card| null{
     const product = this.products.find((item: Card)=>{
      return item.id === id;
    });
     return product? product: null;
  }



  getActiveCard(search:string = ''): Card[]{
    return this.products.filter((item:Card)=>{
      return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      || item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
