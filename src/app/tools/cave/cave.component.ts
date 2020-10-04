import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.scss']
})
export class CaveComponent {

  amount: number = 0;
  deposit: number = 1;
  withholdings: number = 5;
  bank: number = 20;

  total: number = 0;

  constructor() { }

  onCalculate() {
    this.amount = isNaN(this.amount) ? 0 : this.amount;
    this.deposit = isNaN(this.deposit) ? 0 : this.deposit;
    this.withholdings = isNaN(this.withholdings) ? 0 : this.withholdings;
    this.bank = isNaN(this.bank) ? 0 : this.bank;
    this.total = this.amount - (this.amount * (this.deposit / 100)) - (this.amount * (this.withholdings / 100)) - this.bank;
  }

}
