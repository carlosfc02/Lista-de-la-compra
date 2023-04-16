import { Component } from '@angular/core';

interface Item {
  name: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Item[] = [];
  newItemName: string = '';

  addItem() {

  }

  completeItem(item: Item) {

  }

  deleteItem(item: Item) {
    
  }

}
