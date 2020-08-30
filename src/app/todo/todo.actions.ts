
import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const UPDATE_TODO = '[TODO] Actualizar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const COMPLETAR_TODOS = '[TODO] Completar todos';
export const BORRAR_COMPLETADOS_TODOS = '[TODO] BorrarCompletados todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}
export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}
export class updateTodoAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(public text: String, public id: number) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) {}
}
export class CompletarTodosTodoAction implements Action {
  readonly type = COMPLETAR_TODOS;

  constructor(public completar: Boolean) {}
}

export class BorrarTodosCompletadosTodoAction implements Action{
  readonly type = BORRAR_COMPLETADOS_TODOS;

  constructor( ){}


}

export type Acciones =
  | AgregarTodoAction
  | ToggleTodoAction
  | updateTodoAction
  | BorrarTodoAction
  | CompletarTodosTodoAction
  | BorrarTodosCompletadosTodoAction;
