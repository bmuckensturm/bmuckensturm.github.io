import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CdkDrag]
})
export class AppComponent {
  title = 'angular';
  ids = Array.from(Array(12).keys());

  playSound() {
    const audio = new Audio('proud-fart-288263.mp3');
    audio.load();
    audio.play();
  }
}
