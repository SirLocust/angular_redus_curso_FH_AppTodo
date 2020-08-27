import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem:Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  chkField: FormControl;
  txtInput: FormControl
  editandoTodo: boolean
  constructor() { }

  ngOnInit(): void {
    this.chkField = new FormControl(this.todoItem.getCompletado());
    this.txtInput = new FormControl(this.todoItem.getTexto(),Validators.required);
  }

  editarTodo(){
    this.editandoTodo = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
      
    }, 1);
  }
  terminarEdicion(){
    this.editandoTodo = false
  }

}
