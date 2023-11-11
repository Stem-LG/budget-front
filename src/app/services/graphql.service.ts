import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  public GetEvents() {
    return this.apollo.watchQuery({
      query: gql`
        query {
          events {
            id
            name
            description
          }
        }
      `
    }).valueChanges
  }


  public GetEvent(id: number) {
    return this.apollo.watchQuery({
      query: gql`
        query {
          event(id: ${id}) {
            id
            name
            date
            creationDate
            location
            shortDescription
            description
            manager{
              id
              name
              email
            }
          }
        }
      `
    }).valueChanges
  }
}
