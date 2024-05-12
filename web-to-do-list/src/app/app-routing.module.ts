import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ListSourceComponent } from './components/list-source/list-source.component';
import { DetailedDescriptionComponent } from './components/detailed-description/detailed-description.component';

const routes: Route[] = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'add', component: TodoFormComponent },
  { path: 'list', component: TodoListComponent },
  { path: 'admin', component: ListSourceComponent },
  { path: ':id/details', component: DetailedDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
