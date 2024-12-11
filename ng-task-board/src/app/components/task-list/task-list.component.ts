import { Component, input } from '@angular/core';
import { Task } from '../../models';
import { TaskComponent } from '../task/task.component';
import { AddTaskButtonComponent } from "../add-task-button/add-task-button.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, AddTaskButtonComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks = input.required<Task[]>();
}
