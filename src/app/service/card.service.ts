import { Injectable } from "@angular/core";
import { cardMock } from "src/app/mock/card.mock";
import { CardModule } from "src/app/model/card.module";

@Injectable({
  providedIn: 'root'
})
export class CardsService{
  private products: CardModule[] = cardMock;

  getCards(): CardModule[]{
    return this.products;
  }
  getCard(id: number): CardModule | null{
     const product = this.products.find((item: CardModule)=>{
      return item.id === id;
    });
     return product? product: null;
  }



  getActiveCard(search:string = ''): CardModule[]{
    return this.products.filter((item:CardModule)=>{
      return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      || item.price.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
