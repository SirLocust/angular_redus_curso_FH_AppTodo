import { filtrosValidos } from './../../filter/filter.actions';
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
  filtro: filtrosValidos;
  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.listTodos = state.todos;
      this.filtro = state.filtro;
    })
  }

}
