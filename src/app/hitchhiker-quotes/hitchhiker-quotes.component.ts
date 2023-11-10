import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hitchhiker-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hitchhiker-quotes.component.html',
  styleUrl: './hitchhiker-quotes.component.sass'
})
export class HitchhikerQuotesComponent {
  @Input() quote: string = '';
}