import { Component, inject } from '@angular/core';
import { EventService } from '../../event.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-expenses',
  templateUrl: './event-expenses.component.html',
})
export class EventExpensesComponent {

  evs = inject(EventService)

  addExpenseOpen = false

  toggleAddExpense() {
    this.edit = null
    this.addExpenseOpen = !this.addExpenseOpen
    if (this.addExpenseOpen)
      this.evs.getTreasurers()
    else
      this.addExpenseForm.reset()
  }

  toggleEditExpense(id: number) {
    this.edit = id;
    const { item, amount, date, spender, invoice, description } = this.evs.expenses.find((expense) => expense.id == id)

    this.addExpenseForm.controls["item"].setValue(item)
    this.addExpenseForm.controls["amount"].setValue(amount.toString())
    this.addExpenseForm.controls["date"].setValue(date.substring(0, 16))
    this.addExpenseForm.controls["spender"].setValue(spender.id.toString())
    this.addExpenseForm.controls["invoice"].setValue(invoice)
    this.addExpenseForm.controls["description"].setValue(description)

    this.evs.getTreasurers()
    this.addExpenseOpen = true
  }

  ngOnInit() {
    this.evs.initExpenses()
  }

  addExpenseForm = new FormGroup({
    item: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    spender: new FormControl(''),
    invoice: new FormControl(''),
    description: new FormControl(),
  })

  edit = null

  onSubmit() {
    const { item, amount, date, spender, invoice, description } = this.addExpenseForm.value
    if (this.edit) {

      this.evs.api.PutExpense(this.edit, { item, amount: parseInt(amount), date, spender, invoice, description }).subscribe((res) => {
        this.evs.initExpenses()
        this.evs.refreshStats()
        this.toggleAddExpense()
        this.addExpenseForm.reset()
      })
    } else {

      this.evs.api.PostExpense(this.evs.id, { item, amount: parseInt(amount), date, spender, invoice, description }).subscribe((res) => {
        this.evs.initExpenses()
        this.evs.refreshStats()
        this.toggleAddExpense()
        this.addExpenseForm.reset()
      })
    }
  }

  deleteExpense(id: number) {
    this.evs.api.DeleteExpense(id).then((res) => {
      this.evs.initExpenses()
      this.evs.refreshStats()
    })
  }
}
