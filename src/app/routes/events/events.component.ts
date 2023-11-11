import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  providers: [
    EventsService
  ]
})
export class EventsComponent {

  modalOpen = false;

  name = '';
  description = '';

  toggleModalOpen() {
    this.modalOpen = !this.modalOpen
  }

  addEvent() {
    this.events.addEvent({ name: this.name, description: this.description })
  }

  constructor(protected events: EventsService) { }

}
