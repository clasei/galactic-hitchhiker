import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marvin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marvin.component.html',
  styleUrl: './marvin.component.sass'
})
export class MarvinComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  videoSource = 'assets/media/Marvin.mp4';

  playVideo() {
    this.videoPlayer.nativeElement.play();
  }
}
