import { Component } from '@angular/core';

@Component({
  selector: 'app-event-expenses',
  templateUrl: './event-expenses.component.html',
})
export class EventExpensesComponent {
  addExpenseOpen = false

  toggleAddExpense() {
    this.addExpenseOpen = !this.addExpenseOpen
  }
}
