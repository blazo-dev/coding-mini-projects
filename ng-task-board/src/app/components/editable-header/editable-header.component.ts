import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './editable-header.component.html',
  styleUrl: './editable-header.component.scss',
})
export class EditableHeaderComponent {
  title = model<string>('My Task Board');
  description = model<string>('Tasks to keep organised');

  isEditingTitle: boolean = false;
  isEditingDescription: boolean = false;

  activeEditTitle(): void {
    this.isEditingTitle = true;
  }

  deactiveEditTitle(): void {
    this.isEditingTitle = false;
  }

  activeEditDescription(): void {
    this.isEditingDescription = true;
  }

  deactiveEditDescription(): void {
    this.isEditingDescription = false;
  }
}
