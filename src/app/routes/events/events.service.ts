import { Injectable, inject } from '@angular/core';
import { ApiService, event_type } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  api = inject(ApiService)

  events = null
  loading = true


  constructor() {
    this.getEvents();
  }

  //form stuff
  treasurers = []

  getTreasurers() {
    this.api.GetUsers().subscribe((result: any) => {
      this.treasurers = result
    })
  }

  getEvents() {
    this.api.GetEvents().subscribe((result: any) => {
      this.events = result.map((event: event_type): event_type & { link: string } => { return { link: "/event/" + event.id, ...event } })
      this.loading = false
    })
  }

  deleteEvent(id: number) {
    this.api.DeleteEvent(id).then(() => {
      this.getEvents()
    })
  }



}
