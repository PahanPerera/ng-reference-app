import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TodoList } from 'src/app/models/todo-list.model';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: TodoList;

  @Output()
  todoClicked = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void { }

  todoClickedEvent($event: Todo) {
    this.todoClicked.next($event);
  }

}
