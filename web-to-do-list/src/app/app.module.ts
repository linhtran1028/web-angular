import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './service/todo.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSourceComponent } from './components/list-source/list-source.component';
import { ListSourceService } from './service/list-source.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailedDescriptionComponent } from './components/detailed-description/detailed-description.component';
import { TodoStatusComponent } from './components/todo-status/todo-status.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    ListSourceComponent,
    DetailedDescriptionComponent,
    TodoStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TodoService, ListSourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
