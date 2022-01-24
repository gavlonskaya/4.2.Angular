import { Injectable } from "@angular/core";
import { cardMock } from "src/app/mock/card.mock";
import { CardModule } from "src/app/model/card.module";

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private toCart: CardModule[]=[];

  moveToCart(buyCard: CardModule): void{
    this.toCart.push({...buyCard, buy: true});
      
  }
  getCartData(): CardModule[]{
    return this.toCart;
  }
}
