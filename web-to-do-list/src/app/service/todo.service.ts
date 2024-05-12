import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TodoService {
  todoList: Todo[] = [
    {
      id: '1',
      title: 'Bai viet 1',
      content: 'Day la noi dung bai viet 1',
      createAt: '2020-07-06T13:26:31.785Z',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Bai viet 2',
      content: 'Day la noi dung bai viet 2 nhe ',
      createAt: '2020-07-15:00:00.000Z',
      status: 'warning'
    },
  ];

  constructor() {}

  getTodo(): Observable<Todo[]> {
    return of(this.todoList).pipe(delay(500));
  }

  addTodo(title: string, content: string) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id.toString(),
      content: content,
      createAt: new Date().toISOString(),
      title: title,
      status: 'pending'
    };
    this.todoList.unshift(item);
  }

  deleteTodo(item: Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }


  getDetailTodo(id: string) {
    return of(this.todoList.find(todo => todo.id === id)).pipe(delay(500));
  }
}
