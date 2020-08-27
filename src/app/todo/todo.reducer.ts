import { Todo } from './model/todo.model';
import * as fromTodo from "./todo.actions";

const todo1:Todo = new Todo("salvar el mundo");
const todo2:Todo = new Todo("jugar call of duty");
const todo3:Todo = new Todo("cocinar ma;ana");
todo3.setCompletado(true);
const estadoInicial: Todo[] = [todo1,todo2,todo3];


export function todoReducer(state = estadoInicial, action : fromTodo.Acciones): Todo[]{

    switch(action.type){
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo];  
        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit => {

                if( todoEdit.getId() === action.id){
                const todo = new Todo(todoEdit.getTexto());
                todo.setCompletado(!todoEdit.getCompletado());
                todo.setId(todoEdit.getId());
                return todo;
                
                }else{
                    return todoEdit;
                }

            });
        default:
            return state
    }

}