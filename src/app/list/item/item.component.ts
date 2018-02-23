import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() title: String = 'Default title';
  @Output() delete: EventEmitter<Function> = new EventEmitter();
  constructor() { }
  ngOnInit() {}

  deleteTodo() {
    this.delete.emit();
  }
}
