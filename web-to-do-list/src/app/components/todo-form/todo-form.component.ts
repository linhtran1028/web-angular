import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  infoForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(65),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    content: new FormControl(''),
  });


  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.infoForm.valid) {
      const title = this.infoForm.value.title || '';
      const content = this.infoForm.value.content || ''; 

      this.todoService.addTodo(title, content);
      this.infoForm.reset();
    } else {
      console.error('Form is invalid. Please check the input.');
    }
  }

  get title() {
    return this.infoForm.get('title');
  }
}
