import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent {
  route = inject(ActivatedRoute);

  evs = inject(EventService);

  id = null;

  editEventForm = new FormGroup({
    name: new FormControl(''),
    datetime: new FormControl(''),
    location: new FormControl(''),
    treasurer: new FormControl(''),
    description: new FormControl(''),
  })

  onSubmit() {
    const { name, datetime, location, treasurer, description } = this.editEventForm.value
    this.evs.api.PutEvent(this.id, {
      name: name,
      date: datetime,
      location: location,
      description: description,
      manager: parseInt(treasurer)
    }).subscribe((result) => {
      this.evs.event.name = result.name
      this.evs.event.date = result.date
      this.evs.event.location = result.location
      this.evs.event.description = result.description
      this.evs.event.manager = result.manager
      //@ts-ignore
      document.getElementById("edit_event_modal").close()
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.evs.init(this.id, this.editEventForm);
  }
}
