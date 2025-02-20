import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CdkDrag, CdkDropList, CdkDrag]
})
export class AppComponent implements OnInit {
  todo = [1, 1, 1, 1, 1];
  done = [2, 2, 2, 2];

  ngOnInit(): void {
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data, 
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
