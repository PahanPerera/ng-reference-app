import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListContainerComponent } from './todo-list-container.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    TodoListContainerComponent,
    TodoListComponent
  ],
  exports: [
    TodoListContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoListContainerModule { }
