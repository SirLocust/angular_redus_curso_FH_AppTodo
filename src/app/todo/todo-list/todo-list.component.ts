import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodos:Todo[]=[]

  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe( todos => {
      this.listTodos = todos;
    })
  }

}
