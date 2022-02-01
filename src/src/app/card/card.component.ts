import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.moveToCart(this.card);
  }
}