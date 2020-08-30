import { BorrarTodosCompletadosTodoAction } from './../todo.actions';
import { Todo } from './../model/todo.model';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { filtrosValidos, SetFiltroAction } from './../../filter/filter.actions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtrosValidosComp: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos = 'todos';
  tareasPendientes: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);

 
    });
  }

  cambiarFiltro(nuevoFiltro: filtrosValidos): void {
    const accionNuevoFiltro = new SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accionNuevoFiltro);
  }

  contarPendientes(todos: Todo[]):void{
    this.tareasPendientes = todos.filter( todo => !todo.getCompletado()).length;
  }
  
  borrarCompletadosTodos():void{
    const accionBorrarCompletados = new BorrarTodosCompletadosTodoAction();
    this.store.dispatch(accionBorrarCompletados);
  }

}
