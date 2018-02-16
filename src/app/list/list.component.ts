import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from './list.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  private formTodoList: FormGroup;
  public todoList: any;
  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService,
    private http: Http,
  ) {}

  ngOnInit() {
    this.formTodoList = this.formBuilder.group({
      todoName: '',
    });
    this.http.get('http://192.168.1.43:3000/api/v1/checklists').subscribe(
    (data) => {
      this.todoList = data.json();
    });

  }
  onSubmit() {
    this.todoList.push(this.formTodoList.value);
  }
}
