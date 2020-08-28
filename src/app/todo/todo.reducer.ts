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
    case fromTodo.COMPLETAR_TODOS:
      return logicCompletarTodos(state, action);
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
      const todo:Todo =todoEdit.copyTodo()
      todo.setTexto(action.text);

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
      const todo: Todo = todoEdit.copyTodo();
      todo.setCompletado(!todoEdit.getCompletado());
      return todo;
    } else {
      return todoEdit;
    }
  });
};

const logicBorrarTodo = (state: Todo[], action: fromTodo.BorrarTodoAction) => {
  return state.filter((todoEdit: Todo) => todoEdit.getId() !== action.id);
};

const logicCompletarTodos = (
  state: Todo[],
  action: fromTodo.completarTodosTodoAction
) => {
  return state.map((todoEdit: Todo) => {
    if (todoEdit.getCompletado() !== action.completar) {
      const todo:Todo = todoEdit.copyTodo();
      todo.setCompletado(!todoEdit.getCompletado())
      return todo; 
    } else {
      return todoEdit;
    }
  });
};
