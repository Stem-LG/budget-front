import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environment';
import { firstValueFrom } from 'rxjs';

let server_url = environment.API_URL


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  HttpClient = inject(HttpClient);

  router = inject(Router);

  token: string = null

  constructor() {

    this.token = localStorage.getItem("token")

  }

  public isLoggedIn() {
    return this.token != null
  }

  public userInfo() {
    if (this.token == null) return null
    return firstValueFrom(this.HttpClient.get<{ message: string, user: user_type }>(server_url + "auth/test_token/", { headers: { Authorization: `Token ${this.token}` } }))
  }

  public login(username: string, password: string) {
    return this.HttpClient.post(server_url + "auth/login/", { username, password }).subscribe((result) => {
      console.log(result)
      this.token = result["token"]
      localStorage.setItem("token", this.token)
    })
  }

  public logout() {
    if (this.token == null) return

    this.HttpClient.delete(server_url + "auth/logout/", { headers: { Authorization: `Token ${this.token}` } }).subscribe((result) => {
      this.token = null
      localStorage.removeItem("token")
      this.router.navigateByUrl("/login")
    })
  }

  public register(username: string, email: string, password: string) {
    this.HttpClient.post(server_url + "auth/register/", { username: username, email: email, password: password }).subscribe((result) => {
      this.login(username, password)
    })
  }

}



export type user_type = {
  id: number,
  username: string,
  email: string,
}