import { Injectable } from "@angular/core";
import { cardMock } from "src/app/mock/card.mock";
import { Card } from "src/app/model/card.model";

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private toCart: Card[]=[];

  moveToCart(buyCard: Card): void{
    this.toCart.push({...buyCard, buy: true});
      
  }
  getCartData(): Card[]{
    return this.toCart;
  }
}
