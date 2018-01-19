import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  private formTodoList: FormGroup;
  private todoList: Array<Object> = [
    {todoName: 'Купить хлеб'},
    {todoName: 'Купить воды'},
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formTodoList = this.formBuilder.group({
      todoName: ''
    });
  }
  onSubmit() {
    this.todoList.push(this.formTodoList.value);
  }
  deleteTodo(todoIndex: number) {
    console.log(todoIndex);
    this.todoList.splice(todoIndex, 1);
  }
}
