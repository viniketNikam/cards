import { Component, Output, EventEmitter } from '@angular/core';
import { Cards } from '../Models/cards';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  imagePath: string = '../assets/minion.webp';
  name: string = '';
  age: number | null = null;
  phoneNo: number | null = null;

  @Output() addCard = new EventEmitter<Cards>();

  addNewCard() {
    let card = {
      imagePath: this.imagePath,
      name: this.name,
      age: this.age as number,
      phoneNo: this.phoneNo as number,
    };
    this.addCard.emit(card);
    this.name = '';
    this.age = null;
    this.phoneNo = null;
  }
}
