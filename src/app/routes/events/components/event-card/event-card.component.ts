import { Component, Input, inject } from '@angular/core';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() link: string;
  @Input() manager_name: string;

  es = inject(EventsService)
}
