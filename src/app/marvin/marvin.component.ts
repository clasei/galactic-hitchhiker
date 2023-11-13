import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marvin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marvin.component.html',
  styleUrl: './marvin.component.sass'
})
export class MarvinComponent {
  videoSource = 'assets/media/Marvin.mp4';
}
