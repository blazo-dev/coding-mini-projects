import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task-button',
  imports: [],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.scss',
})
export class AddTaskButtonComponent {
  

  addTask = output();

  handleClick() {
  }
}
