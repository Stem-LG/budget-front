import { Component, inject } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-funds',
  templateUrl: './event-funds.component.html',
})
export class EventFundsComponent {
  evs = inject(EventService);

  addFundOpen = false


  toggleAddFund() {
    this.addFundOpen = !this.addFundOpen
  }

}
