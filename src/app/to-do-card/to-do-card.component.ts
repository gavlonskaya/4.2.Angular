import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef} from '@angular/core';
import {ToDoModel} from '../models/toDo.model';

@Component({
  selector: 'to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.css']
})
export class ToDoCardComponent implements OnInit, OnDestroy {
  @Input() toDo: ToDoModel;
  @Output() done: EventEmitter<number> = new EventEmitter<number>();

  onDone(): void {
    this.done.emit(this.toDo.id);
  }

  ngOnInit(): void {
    console.log(`Initialized: ${this.toDo.task}`);
  }

  ngOnDestroy(): void {
    console.log(`Destroyed: ${this.toDo.task}`);
  }
}