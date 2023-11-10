import { Component } from '@angular/core';
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
  moods: string[] = ['Happy', 'Sad', 'Brave', 'Curious', 'Hungry', 'In Love'];
  selectedQuote: any;

  constructor(private dataService: DataService) { }

  onMoodSelected(mood: string): void {
    this.dataService.getQuotesByMood(mood).subscribe(quote => {
      this.selectedQuote = quote;
    });
  }
}