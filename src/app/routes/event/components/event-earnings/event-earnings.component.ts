import { Component, inject } from '@angular/core';
import { EventService } from '../../event.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-earnings',
  templateUrl: './event-earnings.component.html',
})
export class EventEarningsComponent {

  evs = inject(EventService)

  addEarningOpen = false

  toggleAddEarning() {
    this.edit = null
    this.addEarningOpen = !this.addEarningOpen
    if (this.addEarningOpen)
      this.evs.getTreasurers()
    else
      this.addEarningForm.reset()
  }

  toggleEditEarning(id: number) {
    this.edit = id;
    const { item, amount, date, seller, description } = this.evs.earnings.find((earning) => earning.id == id)

    this.addEarningForm.controls["item"].setValue(item)
    this.addEarningForm.controls["amount"].setValue(amount.toString())
    this.addEarningForm.controls["date"].setValue(date.substring(0, 16))
    this.addEarningForm.controls["seller"].setValue(seller.id.toString())
    this.addEarningForm.controls["description"].setValue(description)

    this.evs.getTreasurers()
    this.addEarningOpen = true
  }

  ngOnInit() {
    this.evs.initEarnings()
  }

  addEarningForm = new FormGroup({
    item: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    seller: new FormControl(''),
    description: new FormControl(''),
  })

  edit = null


  onSubmit() {
    const { item, amount, date, seller, description } = this.addEarningForm.value

    if (this.edit) {
      this.evs.api.PutEarning(this.edit, { item, amount: parseInt(amount), date, seller, description }).subscribe((res) => {
        this.evs.initEarnings()
        this.evs.refreshStats()
        this.toggleAddEarning()
        this.addEarningForm.reset()
      })
    } else {
      this.evs.api.PostEarning(this.evs.id, { item, amount: parseInt(amount), date, seller, description }).subscribe((res) => {
        this.evs.initEarnings()
        this.evs.refreshStats()
        this.toggleAddEarning()
        this.addEarningForm.reset()
      })
    }
  }

  deleteEarning(id: number) {
    this.evs.api.DeleteEarning(id).then((res) => {
      this.evs.initEarnings()
      this.evs.refreshStats()
    })
  }
}