import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.css',
})
export class TestListComponent {
  public itemList: string = '';
  public list: string[] = [];

  public addItemList() {
    if (this.itemList) {
      this.list.push(this.itemList);
      console.log(this.itemList);
      this.itemList = '';
    }
  }

  public deleteItemList(index: number) {
    this.list.splice(index, 1);
  }
}
