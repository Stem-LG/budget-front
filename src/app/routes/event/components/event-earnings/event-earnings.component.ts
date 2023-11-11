import { Component } from '@angular/core';

@Component({
  selector: 'app-event-earnings',
  templateUrl: './event-earnings.component.html',
})
export class EventEarningsComponent {
  addEarningOpen = false

  toggleAddEarning() {
    this.addEarningOpen = !this.addEarningOpen
  }
}
