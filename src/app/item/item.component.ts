import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() todoName: String = 'Default title';
  @Output() todoRemove: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  public remove() {
    this.todoRemove.emit();
  }
}
