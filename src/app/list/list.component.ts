import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

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
      todoName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ])
    });
  }
  onSubmit() {

    if (this.formTodoList.valid) {
      this.todoList.push(this.formTodoList.value);
      this.formTodoList.reset();
    } else {
      alert('Form is invalid')
    }
  }

  todoRemove(todoIndex: number) {
    console.log(todoIndex);
    this.todoList.splice(todoIndex, 1);
  }
}
