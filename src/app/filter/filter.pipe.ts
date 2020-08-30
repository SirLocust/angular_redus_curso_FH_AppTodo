import { filtrosValidos } from './filter.actions';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch(filtro){
      case 'todos':
        return todos
      case 'completados':
        return this.filterCompletadosPendientes(todos, true);
      case 'pendientes':
        return this.filterCompletadosPendientes(todos, false);
    }



     
  }

  filterCompletadosPendientes(todos: Todo[],estado: boolean):Todo[]{
    return todos.filter( todo => todo.getCompletado() === estado)
  }

}
