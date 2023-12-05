import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { environment } from 'environment';
import { AuthService, user_type } from './auth.service';



let server_url = environment.API_URL + "api/"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  HttpClient = inject(HttpClient);
  auth = inject(AuthService)

  //statsView

  public GetStats(): Observable<stats_type> {
    return this.HttpClient.get<stats_type>(server_url + "stats/", { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  //eventsView

  public GetEvents(): Observable<event_preview_type[]> {
    return this.HttpClient.get<event_preview_type[]>(server_url + "event/", { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PostEvent(name: string, date: string, location: string, description: string, manager: number): Observable<event_type> {
    return this.HttpClient.post<event_type>(server_url + "event/", { name, date, location, description, manager }, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  //usersView

  public GetUsers(): Observable<user_type[]> {
    return this.HttpClient.get<user_type[]>(server_url + "users/", { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  //eventView

  public GetEvent(id: number): Observable<event_type> {
    return this.HttpClient.get<event_type>(server_url + "event/" + id + "/", { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PutEvent(id, event: { name: string, date: string, location: string, description: string, manager: number }) {
    return this.HttpClient.put<event_type>(server_url + "event/" + id + "/", event, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public DeleteEvent(id: number) {
    return firstValueFrom(this.HttpClient.delete(server_url + "event/" + id + "/", { headers: { Authorization: `Token ${this.auth.token}` } }))
  }

  //fundsView

  public GetFunds(id: number): Observable<fund_type[]> {
    return this.HttpClient.get<fund_type[]>(server_url + "event/" + id + "/funds/", { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PostFund(id: number, fund: { title: string, date: string, description: string, amount: number, source: string, returnable: boolean }) {
    return this.HttpClient.post<fund_type>(server_url + "event/" + id + "/funds/", fund, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PutFund(id: number, fund: { title: string, date: string, description: string, amount: number, source: string, returnable: boolean }) {
    return this.HttpClient.put<fund_type>(server_url + "fund/" + id + "/", fund, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public DeleteFund(id: number) {
    return firstValueFrom(this.HttpClient.delete(server_url + "fund/" + id + "/", { headers: { Authorization: `Token ${this.auth.token}` } }))
  }

  //expensesView

  public GetExpenses(id: number): Observable<expense_type[]> {
    return this.HttpClient.get<expense_type[]>(server_url + "event/" + id + "/expenses/", { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PostExpense(id: number, expense: { item: string, date: string, description: string, amount: number, invoice: string, spender: string }) {
    return this.HttpClient.post<expense_type>(server_url + "event/" + id + "/expenses/", expense, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PutExpense(id: number, expense: { item: string, date: string, description: string, amount: number, invoice: string, spender: string }) {
    return this.HttpClient.put<expense_type>(server_url + "expense/" + id + "/", expense, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public DeleteExpense(id: number) {
    return firstValueFrom(this.HttpClient.delete(server_url + "expense/" + id + "/", { headers: { Authorization: `Token ${this.auth.token}` } }))
  }

  //earningsView

  public GetEarnings(id: number): Observable<earning_type[]> {
    return this.HttpClient.get<earning_type[]>(server_url + "event/" + id + "/earnings/", { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PostEarning(id: number, earning: { item: string, date: string, description: string, amount: number, seller: string }) {
    return this.HttpClient.post<earning_type>(server_url + "event/" + id + "/earnings/", earning, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public PutEarning(id: number, earning: { item: string, date: string, description: string, amount: number, seller: string }) {
    return this.HttpClient.put<earning_type>(server_url + "earning/" + id + "/", earning, { headers: { Authorization: `Token ${this.auth.token}` } })
  }

  public DeleteEarning(id: number) {
    return firstValueFrom(this.HttpClient.delete(server_url + "earning/" + id + "/", { headers: { Authorization: `Token ${this.auth.token}` } }))
  }

}

type stats_type = {
  funds: number,
  expenses: number,
  earnings: number,
}

type event_preview_type = {
  id: number,
  name: string,
  description: string,
  manager_name: string,
}

export type event_type = {
  id: number,
  name: string,
  date: string,
  location: string,
  description: string,
  manager: {
    id: number,
    name: string,
  },
  funds: number,
  expenses: number,
  earnings: number,
}

export type fund_type = {
  id: number,
  title: string,
  date: string,
  description: string,
  amount: number,
  source: {
    id: number,
    name: string,
  },
  returnable: boolean,
}

export type expense_type = {
  id: number,
  item: string,
  date: string,
  description: string,
  amount: number,
  invoice: string,
  spender: {
    id: number,
    name: string,
  }
}



export type earning_type = {
  id: number,
  item: string,
  date: string,
  description: string,
  amount: number,
  seller: {
    id: number,
    name: string,
  }
}