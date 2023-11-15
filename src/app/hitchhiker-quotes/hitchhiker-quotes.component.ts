import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hitchhiker-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hitchhiker-quotes.component.html',
  styleUrl: './hitchhiker-quotes.component.sass'
})
export class HitchhikerQuotesComponent implements OnChanges {
  @Input() selectedMood?: string;

  selectedQuote: any;

  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedMood'] && changes['selectedMood'].currentValue) {
      this.selectedQuote = this.dataService.getQuotesByMood(changes['selectedMood'].currentValue);
    }
  }
}