import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTodoContainerComponent } from './add-todo-container.component';



@NgModule({
  declarations: [
    AddTodoContainerComponent
  ],
  exports: [
    AddTodoContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AddTodoContainerModule { }
