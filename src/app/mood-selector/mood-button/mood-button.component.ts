import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mood-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mood-button.component.html',
  styleUrl: './mood-button.component.sass'
})
export class MoodButtonComponent {
  @Input() mood: string = ''; // initial value assigned to declare mood
  @Output() moodSelected = new EventEmitter<string>();

  selectMood(): void {
    this.moodSelected.emit(this.mood);
  }
}