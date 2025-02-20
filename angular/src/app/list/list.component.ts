import { Component } from '@angular/core';
import { CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-list',
  imports: [CdkDropList, TileComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items = [1, 1, 1, 1, 1];

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,  event.previousIndex, event.currentIndex);
    }
  }
}
