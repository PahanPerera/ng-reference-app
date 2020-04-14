import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/3-core/todo-list.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root' // @todo review this provided in ROOT
})
export class TodoListFacade {


    constructor(
        private todoListService: TodoService
    ) {
    }

    getTodoList() {
        return this.todoListService.getTodoList();
    }

    getCompletedList() {
        return this.todoListService.getCompletedList();
    }

    completeTodo(incomingTodo: Todo): void {
        this.todoListService.completeTodo(incomingTodo);
    }

    addTodo(newTodo: Todo) {
        this.todoListService.addTodo(newTodo);
    }

}