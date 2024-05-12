import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoList!: Observable<Todo[]>;

  constructor(
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoList = this.todoService.getTodo();
  }

  deleteTodo(item: Todo) {
    this.todoService.deleteTodo(item);
  }
}
