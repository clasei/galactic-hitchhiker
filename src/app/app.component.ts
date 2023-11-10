import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MoodSelectorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'galaxy-hitchhiker';
  quotes: any[] = [];   // quotes' array

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getQuotes()
  }
}
