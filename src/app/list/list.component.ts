import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public formTodoList: FormGroup;
  public formMsg: string;
  public todoList: Array<Object> = [
    {todoName: 'Купить хлеб'},
    {todoName: 'Купить воды'},
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formTodoList = this.formBuilder.group({
      todoName: new FormControl('', [
        Validators.required
      ])
    });
  }
  onSubmit() {
    if (this.formTodoList.valid) {
      this.todoList.push(this.formTodoList.value);
      this.formMsg = '';
    } else {
      this.formMsg = 'Form is invalid';
    }
    this.formTodoList.reset();
  }
  todoRemove(todoIndex: number) {
    console.log(todoIndex);
    this.todoList.splice(todoIndex, 1);
  }
}
