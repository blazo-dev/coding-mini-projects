import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  isActive = input(false)
  clicked = output<void>()

  onClick(): void {
    this.clicked.emit(); // Emite el evento de clic al padre
  }
}
