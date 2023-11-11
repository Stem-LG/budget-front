import { Injectable, inject } from '@angular/core';
import { GraphqlService } from './graphql.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  //dependency injection

  gs = inject(GraphqlService);

  //tab control

  selectedTab = 1

  setSelectedTab(tab: number) {
    this.selectedTab = tab
  }

  //event control

  id = null
  event: event = null
  loading = true

  init(id: string) {
    this.id = id
    this.gs.GetEvent(this.id).subscribe((result: any) => {
      this.loading = result.loading
      this.event = result.data.event
      console.log(this.event)
    })
  }


}

type event = {
  id: string,
  name: string,
  description: string,
  date: Date,
  location: string,
  manager: {
    name: string,
    email: string,
  },
}