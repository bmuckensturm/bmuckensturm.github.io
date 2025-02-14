import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CdkDrag]
})
export class AppComponent implements OnInit {
  ids = Array.from(Array(12).keys());

  ngOnInit(): void {
  }
}
