import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit() {
    let { username, password } = this.loginForm.value
    this.authService.login(username, password).add(() => {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(["/dashboard"])
      }
    })
  }
}
