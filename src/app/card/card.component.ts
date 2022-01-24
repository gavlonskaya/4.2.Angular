import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModule } from 'src/app/model/card.module';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardModule;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.moveToCart(this.card);
  }
}