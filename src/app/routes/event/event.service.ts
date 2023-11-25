import { Injectable, inject } from '@angular/core';
import { ApiService, earning_type, event_type, expense_type, fund_type } from '../../services/api.service';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //dependency injection

  api = inject(ApiService);

  //tab control

  selectedTab = 0

  setSelectedTab(tab: number) {
    this.selectedTab = tab
  }

  //comms

  public formatDate(date: string) {
    return formatDate(date, "dd/MM/yyyy HH:mm", "en-US")
  }

  treasurers = []

  getTreasurers() {
    this.api.GetUsers().subscribe((result) => {
      this.treasurers = result
    })
  }

  //event control

  id = null
  event: event_type = null
  loading = true
  balance = 0

  init(id: string, editEventForm) {
    this.id = id
    this.api.GetEvent(this.id).subscribe((result: any) => {
      this.loading = result.loading
      this.event = result
      this.balance = this.event.earnings + this.event.funds - this.event.expenses
      console.log(this.event)

      editEventForm.controls["name"].setValue(this.event.name)
      editEventForm.controls["datetime"].setValue(this.event.date.substring(0, 16))
      editEventForm.controls["location"].setValue(this.event.location)
      editEventForm.controls["treasurer"].setValue(this.event.manager.id)
      editEventForm.controls["description"].setValue(this.event.description)
    })
  }

  public refreshStats() {
    this.api.GetEvent(this.id).subscribe((result: any) => {
      this.event = result
      this.balance = this.event.earnings + this.event.funds - this.event.expenses
    })
  }
  
  // funds
  funds: fund_type[] = null

  public initFunds() {
    this.api.GetFunds(this.id).subscribe((result) => {
      this.funds = result
    })
  }


  //expenses
  expenses: expense_type[] = null
  public initExpenses() {
    this.api.GetExpenses(this.id).subscribe((result) => {
      this.expenses = result
    })
  }

  //earnings
  earnings: earning_type[] = null
  public initEarnings() {
    this.api.GetEarnings(this.id).subscribe((result) => {
      this.earnings = result
    })
  }

}

