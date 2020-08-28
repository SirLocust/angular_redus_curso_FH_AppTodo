import { AppState } from './../app.reducers';
import { Store } from '@ngrx/store';
import { completarTodosTodoAction } from './todo.actions';
import { Component, OnInit } from '@angular/core';
import { todoReducer } from './todo.reducer';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  completar: boolean = false
  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  CompletarTodos():void{
    this.completar = !this.completar
    const accionCompletarTodos = new completarTodosTodoAction(this.completar);
    this.store.dispatch(accionCompletarTodos)
  }

}
