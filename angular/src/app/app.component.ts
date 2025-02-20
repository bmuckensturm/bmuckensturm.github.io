import { Component, OnInit } from '@angular/core';
import { CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TileComponent } from './tile/tile.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CdkDropList, CdkDropListGroup, TileComponent, ListComponent]
})
export class AppComponent implements OnInit {
  listIds = Array.from(Array(6).keys());

  ngOnInit(): void {
  }
}
