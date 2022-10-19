import { Component } from '@angular/core';
import { Cards } from './Models/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards';
  cards: Cards[];

  constructor() {
    this.cards = [
      {
        name: 'Viniket Nikam',
        age: 30,
        phoneNo: 9960090129,
        imagePath: '../assets/viniket.jpg',
      },
      {
        name: 'Garima Bhatia',
        age: 30,
        phoneNo: 9971314867,
        imagePath: '../assets/garima.jpg',
      },
      {
        name: 'Harish Bhatia',
        age: 15,
        phoneNo: 9822098220,
        imagePath: '../assets/harish.jpg',
      },
    ];
  }
  getColor(age: number) {
    return age < 18 ? 'green' : 'red';
  }
  addIndex(card: Cards) {
    this.cards.push(card);
  }
}
