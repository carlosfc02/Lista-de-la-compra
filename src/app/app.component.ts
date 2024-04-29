import { Component} from '@angular/core';


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

  headerFather = "Lista de la compra";
  items: Item[] = [];
  newItemName: string = '';

  addItem() {
    const newItem: Item = {name:this.newItemName, completed:false};
    this.items.push(newItem);
    this.newItemName = '';
  }

  completeItem(item: Item) {
    item.completed = true;
  }

  deleteItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index >=0){
      this.items.splice(index,1);
    }
  }

  descompleteItem(item : Item) {
    item.completed = false;
  }

  completeAll() {
    for (let i = 0; i < this.items.length; i++) {
        this.items[i].completed = true;
    }
  }

  clearAllItems(){
    this.items =[];
  }

  countIncompleteItems() {
    let numIncompleteItems = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (!this.items[i].completed){
        numIncompleteItems += 1;
      }
    }
    return numIncompleteItems;
  }

  countCompleteItems() {
    let numCompleteItems = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].completed){
        numCompleteItems += 1;
      }
    }
    return numCompleteItems;
  }

  clearCompletedItems(){
    this.items = this.items.filter(item => !item.completed);
  }

}
