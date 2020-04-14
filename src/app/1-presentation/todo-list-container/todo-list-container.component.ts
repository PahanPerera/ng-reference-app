import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoListFacade } from 'src/app/2-abstraction/todo-list-sandbox/todo-list-facade';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/models/todo-list.model';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class TodoListContainerComponent implements OnInit {

  todoList$: Observable<TodoList>;
  completedList$: Observable<TodoList>;

  constructor(
    private todoListFacade: TodoListFacade
  ) { }

  ngOnInit(): void {
    this.todoList$ = this.todoListFacade.getTodoList();
    this.completedList$ = this.todoListFacade.getCompletedList();
  }

  todoClicked($event: Todo) {
    this.todoListFacade.completeTodo($event);
  }

}
