import { Component, input } from '@angular/core';
import { Task } from '../../models';
import { TASK_IMAGES, TASK_STATES } from '../../shared/util';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  taskStates = TASK_STATES;
  taskImages = TASK_IMAGES;
  task = input.required<Task>();
}
