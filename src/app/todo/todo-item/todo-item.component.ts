import { ToggleTodoAction, updateTodoAction, BorrarTodoAction } from './../todo.actions';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;
  editandoTodo: boolean;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkField = new FormControl(this.todoItem.getCompletado());
    this.txtInput = new FormControl(
      this.todoItem.getTexto(),
      Validators.required
    );

    this.chkField.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todoItem.getId());
      this.store.dispatch(accion);
    });
  }

  editarTodo() {
    this.editandoTodo = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editandoTodo = false;
    const valueTodoInput = this.txtInput.value;

    if (valueTodoInput !== '') {
      const accionActualizarTodo = new updateTodoAction(
        valueTodoInput,
        this.todoItem.getId()
      );
      this.store.dispatch(accionActualizarTodo);
    } else {
      console.log('la nota no debe estar vacia');
    }
    // console.log(this.txtInputFisico.nativeElement)
  }
  borrarTodo(){
    const accionBorrarTodo =  new BorrarTodoAction(this.todoItem.getId())
    this.store.dispatch(accionBorrarTodo);
  }
}
