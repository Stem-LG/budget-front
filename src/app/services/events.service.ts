import { Injectable } from '@angular/core';
import { GraphqlService } from './graphql.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  events = null
  loading = true

  constructor(private gs: GraphqlService) {
    console.log("events service started")
    this.gs.GetEvents().subscribe((result: any) => {
      this.loading = result.loading
      this.events = result.data.events.map((event: any) => { return { link: "/event/" + event.id, ...event } })
    })
  }



  addEvent({ name, description }: addEventParams) {
    this.events.push({
      name,
      description,
      link: `/event/${this.events.length + 1}`
    })
  }

}


interface addEventParams {
  name: string,
  description: string
}