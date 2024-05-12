import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.css'],
})
export class TodoStatusComponent implements OnInit {
  @Input() status!: string;

  constructor() {}
  ngOnInit(): void {}

  getStatusColor(status: string): string {
    switch (status) {
      case 'pending':
        return 'red';
      case 'warning':
        return 'orange';
      default:
        return 'black';
    }
  }
}


