import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HttpClientModule, 
    MoodSelectorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'galaxy-hitchhiker';
  quotes: any[] = [];   // quotes' array

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getQuotes().subscribe(data => {
      this.quotes = data;
    }, error => {
      console.error('Error fetching quotes', error);
    });
  }
}
