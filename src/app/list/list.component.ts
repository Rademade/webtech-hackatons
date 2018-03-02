import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ListService } from './list.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnChanges {
  private formTodoList: FormGroup;
  public todoList: any;
  public currentTodo;
  public editMode: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService,
    private http: Http,
  ) {}

  ngOnInit() {
    this.formTodoList = this.formBuilder.group({
      title: '',
    });
    this.getTodos();
  }

  ngOnChanges() {
    this.formTodoList.reset();
  }
  getTodos() {
    this.listService.index().subscribe(
      (data) => {
        this.todoList = data.json();
      });
  }
  createTodo() {
    this.listService.create(this.formTodoList.value).subscribe(
      () => this.getTodos()
    );
    this.ngOnChanges();
  }
  deleteTodo(id) {
    this.listService.destroy(id).subscribe(
      () => this.getTodos()
    );
  }
  editTodo(index) {
    this.toggleEditMode();
    this.currentTodo = this.todoList[index];
    this.formTodoList.patchValue(this.currentTodo);
    this.ngOnChanges();
  }
  updateTodo() {
    this.toggleEditMode();
    this.listService.update(this.currentTodo.id, this.formTodoList.value).subscribe(
      () => this.getTodos()
    );
    this.ngOnChanges();
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
