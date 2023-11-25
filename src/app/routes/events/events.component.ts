import { Component, inject } from '@angular/core';
import { EventsService } from './events.service';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  providers: [
    EventsService
  ]
})
export class EventsComponent {

  es = inject(EventsService)

  addEventForm = new FormGroup({
    name: new FormControl(''),
    datetime: new FormControl(''),
    location: new FormControl(''),
    treasurer: new FormControl(''),
    description: new FormControl(''),
  })

  onSubmit() {
    let { name, datetime, location, treasurer, description } = this.addEventForm.value
    console.log(this.addEventForm.value)
    this.es.api.PostEvent(name, datetime, location, description, parseInt(treasurer)).subscribe((result) => {
      this.es.getEvents()
    })
  }

}
