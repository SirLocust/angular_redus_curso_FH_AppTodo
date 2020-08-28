import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';

const todo1: Todo = new Todo('salvar el mundo');
const todo2: Todo = new Todo('jugar call of duty');
const todo3: Todo = new Todo('cocinar ma;ana');
todo3.setCompletado(true);
const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Acciones
): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];
    case fromTodo.TOGGLE_TODO:
      return logicToggleTodo(state, action);
    case fromTodo.UPDATE_TODO:
      return logicActualizarTodo(state, action);
    case fromTodo.BORRAR_TODO:
      return logicBorrarTodo(state, action);
    default:
      return state;
  }
}

const logicActualizarTodo = (
  state: Todo[],
  action: fromTodo.updateTodoAction
): Todo[] => {
  return state.map((todoEdit) => {
    if (todoEdit.getId() == action.id) {
      const todo = new Todo(action.text);
      todo.setId(action.id);
      return todo;
    } else {
      return todoEdit;
    }
  });
};

const logicToggleTodo = (
  state: Todo[],
  action: fromTodo.ToggleTodoAction
): Todo[] => {
  return state.map((todoEdit) => {
    if (todoEdit.getId() === action.id) {
      const todo = new Todo(todoEdit.getTexto());
      todo.setCompletado(!todoEdit.getCompletado());
      todo.setId(todoEdit.getId());
      return todo;
    } else {
      return todoEdit;
    }
  });
};

const logicBorrarTodo = (state: Todo[], action: fromTodo.BorrarTodoAction) => {
  return state.filter((todoEdit: Todo) => todoEdit.getId() !== action.id);
};
