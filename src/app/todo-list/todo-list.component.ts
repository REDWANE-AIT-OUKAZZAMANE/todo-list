// todo-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  
  tasks: { todo: string, priority: string, dueDate: string }[] = [];

  addTask(todo: string, priority: string, dueDate: string) {
    this.tasks.push({ todo, priority, dueDate });
  }

  removeTask(todo: string) {
    this.tasks = this.tasks.filter(t => t.todo !== todo);
  }
}
