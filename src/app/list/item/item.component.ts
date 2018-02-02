import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() public todoName: String = 'Default title';
  @Output() public todoRemove: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}
  public remove() {
    this.todoRemove.emit();
  }
}
