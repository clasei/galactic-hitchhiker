import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoodButtonComponent } from './mood-button/mood-button.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mood-selector',
  standalone: true,
  imports: [CommonModule, MoodButtonComponent],
  templateUrl: './mood-selector.component.html',
  styleUrl: './mood-selector.component.sass'
})
export class MoodSelectorComponent {
  moods: string[] = ['Happy', 'Sad', 'Curious', 'Brave', 'In Love', 'Hungry'];
  selectedQuote: any;
  selectedMood: string = ''; // Keep track of the selected mood
  @Output() moodChosen = new EventEmitter<string>();

  constructor(private dataService: DataService) { }

  onMoodSelected(mood: string): void {
    this.selectedMood = mood;
    this.moodChosen.emit(mood); 
  }
}