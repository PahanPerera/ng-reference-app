import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListContainerModule } from './1-presentation/todo-list-container/todo-list-container.module';
import { AddTodoContainerModule } from './1-presentation/add-todo-container/add-todo-container.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoListContainerModule,
    AddTodoContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
