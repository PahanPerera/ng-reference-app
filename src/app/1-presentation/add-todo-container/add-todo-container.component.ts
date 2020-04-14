import { Component, OnInit } from '@angular/core';
import { TodoListFacade } from 'src/app/2-abstraction/todo-list-sandbox/todo-list-facade';

@Component({
  selector: 'app-add-todo-container',
  templateUrl: './add-todo-container.component.html',
  styles: [
  ]
})
export class AddTodoContainerComponent implements OnInit {

  newTodoItem = '';

  constructor(
    private todoListFacade: TodoListFacade
  ) { }

  ngOnInit(): void {
  }

  addNewTodo() {
    const randomId = Math.floor(Math.random() * 100);
    this.todoListFacade.addTodo({
      id: randomId,
      title: this.newTodoItem,
      isCompleted: false
    })
    this.newTodoItem = '';
  }

}
