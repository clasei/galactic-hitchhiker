import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { HitchhikerQuotesComponent } from './hitchhiker-quotes/hitchhiker-quotes.component';
import { MarvinComponent } from './marvin/marvin.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent,
    MoodSelectorComponent,
    HitchhikerQuotesComponent,
    MarvinComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @ViewChild(MarvinComponent) marvin!: MarvinComponent;
  chosenMood: string = ''; 
  quotes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getQuotes();
  }

  onMoodChosen(mood: string) {
    this.chosenMood = mood;
    if (this.marvin) {
      this.marvin.playVideo();
    }
  }
}