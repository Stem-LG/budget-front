import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent {
  constructor(private route: ActivatedRoute) { }

  evs = inject(EventService); 

  id = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.evs.init(this.id);
  }
}
