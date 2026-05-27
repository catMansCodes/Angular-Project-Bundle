import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeadingComponent } from '../../shared/components/heading/heading.component';

@Component({
  selector: 'app-todo-app',
  imports: [
    FooterComponent,
    HeaderComponent,
    HeadingComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  profileCardHeading: string = 'Todo App';
  profileCardSubHeading: string =
    'Create a todo management application using Angular directives.';

  todoList: string[] = [];
  newTask: string = '';

  addNewTask() {
    this.todoList.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    if (confirm('Are you sure?')) {
      this.todoList.splice(index, 1);
    }
  }
}
