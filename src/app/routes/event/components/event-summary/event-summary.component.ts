import { Component, inject } from '@angular/core';
import { EventService } from 'src/app/routes/event/event.service';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
})
export class EventSummaryComponent {

  evs = inject(EventService);

}
