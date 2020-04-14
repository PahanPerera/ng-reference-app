import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoList } from '../models/todo-list.model';
import { Todo } from '../models/todo.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private todoList = [
        {
            id: 0,
            title: 'Buy Milk',
            isCompleted: true
        },
        {
            id: 1,
            title: 'Learn React',
            isCompleted: false
        }
    ]
    private todoListSubject = new BehaviorSubject<TodoList>(this.todoList);
    private todoList$: Observable<TodoList>;

    constructor() {
        this.todoList$ = this.todoListSubject.asObservable();
    }

    getTodoList() {
        return this.todoList$.pipe(
            map((list: TodoList) => {
                return list.filter((todo: Todo) => !todo.isCompleted)
            })
        );
    }

    getCompletedList() {
        return this.todoList$.pipe(
            map((list: TodoList) => {
                return list.filter((todo: Todo) => todo.isCompleted)
            })
        );
    }

    completeTodo(incomingTodo: Todo): void {
        let updated = this.todoList.find((todo: Todo) => {
            return incomingTodo.id === todo.id
        });
        updated.isCompleted = !updated.isCompleted;
        this.todoListSubject.next(this.todoList);
    }

    addTodo(newTodo: Todo) {
        this.todoList.push(newTodo);
        this.todoListSubject.next(this.todoList);
    }
}