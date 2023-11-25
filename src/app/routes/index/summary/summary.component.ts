import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SummaryService } from './summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent {

  ss = inject(SummaryService)

}
