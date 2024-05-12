import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { TodoStatusComponent } from '../todo-status/todo-status.component';

@Component({
  selector: 'app-detailed-description',
  templateUrl: './detailed-description.component.html',
  styleUrls: ['./detailed-description.component.css'],
})
export class DetailedDescriptionComponent {
  item: Observable<Todo | undefined> | undefined;
  todoId: string | null = null;

  constructor(private route: ActivatedRoute, public todoService: TodoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('id');
      if (this.todoId) {
        this.item = this.todoService.getDetailTodo(this.todoId);
      }
    });
  }
}
