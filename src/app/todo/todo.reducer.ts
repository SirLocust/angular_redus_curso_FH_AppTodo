import { Todo } from './model/todo.model';
import * as fromTodo from "./todo.actions";


const estadoInicial: Todo[] = [];


export function todoReducer(state = estadoInicial, action : fromTodo.Acciones): Todo[]{

    switch(action.type){
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo];  
        default:
            return state
    }

}