import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/routes/event/event.service';

@Component({
  selector: 'app-event-funds',
  templateUrl: './event-funds.component.html',
})
export class EventFundsComponent {
  evs = inject(EventService);


  addFundOpen = false


  toggleAddFund() {
    this.edit = null
    this.addFundOpen = !this.addFundOpen
    if (this.addFundOpen)
      this.evs.getTreasurers()
    else
      this.addFundForm.reset()
  }

  toggleEditFund(id: number) {
    this.edit = id;
    const { title, date, description, amount, source, returnable } = this.evs.funds.find((fund) => fund.id == id)

    this.addFundForm.controls["title"].setValue(title)
    this.addFundForm.controls["date"].setValue(date.substring(0, 16))
    this.addFundForm.controls["description"].setValue(description)
    this.addFundForm.controls["amount"].setValue(amount.toString())
    this.addFundForm.controls["source"].setValue(source.id.toString())
    this.addFundForm.controls["returnable"].setValue(returnable)

    this.evs.getTreasurers()
    this.addFundOpen = true
  }

  ngOnInit() {
    this.evs.initFunds();
  }

  addFundForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl(''),
    amount: new FormControl(''),
    source: new FormControl(''),
    returnable: new FormControl(),
  })

  edit = null

  onSubmit() {
    const { title, date, description, amount, source, returnable } = this.addFundForm.value
    if (this.edit) {

      this.evs.api.PutFund(this.edit, { title, date, description, amount: parseInt(amount), source, returnable }).subscribe((res) => {
        this.evs.initFunds();
        this.evs.refreshStats();
        this.toggleAddFund();
        this.addFundForm.reset();
      })

    } else {

      this.evs.api.PostFund(this.evs.id, { title, date, description, amount: parseInt(amount), source, returnable }).subscribe((res) => {
        this.evs.initFunds();
        this.evs.refreshStats();
        this.toggleAddFund();
        this.addFundForm.reset();
      })

    }
  }

  deleteFund(id: number) {
    this.evs.api.DeleteFund(id).then((res) => {
      this.evs.initFunds();
      this.evs.refreshStats();
    })
  }


}
