import { Component, effect, signal } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { Board } from '../../models';
import { EditableHeaderComponent } from '../editable-header/editable-header.component';

@Component({
  selector: 'app-board',
  imports: [TaskListComponent, EditableHeaderComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  board: Board = {
    id: 1,
    name: 'My Task Board',
    description: 'This is the main project board.',
    tasks: [
      {
        id: 101,
        description: '',
        name: 'Design UI',
        icon: '🖌️',
        status: 'blocked',
      },
      {
        id: 102,
        name: 'Set up backend',
        description: '',
        icon: '💻',
        status: 'progress',
      },
      {
        id: 103,
        name: 'Integrate APIs',
        description: '',
        icon: '🔗',
        status: 'done',
      },
      {
        id: 104,
        name: 'Deploy application',
        description: 'Deploy the application to a live environment.',
        icon: '🚀',
        status: 'todo',
      },
    ],
  };

  title = signal<string>(this.board.name);
  description = signal<string>(this.board.description);

  private debounceTimer!: ReturnType<typeof setTimeout>;

  changeBoardWithDebounce = effect(() => {
    const title = this.title();
    const description = this.description();

    clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      console.log('Debounced title:', title);
      console.log('Debounced description:', description);
    }, 500);
  });
}
