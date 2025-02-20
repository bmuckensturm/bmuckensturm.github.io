import { Component, OnInit } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CdkDropListGroup, ListComponent]
})
export class AppComponent implements OnInit {
  listIds = Array.from(Array(6).keys());

  ngOnInit(): void {
  }
}
