import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
})
export class AppbarComponent {
  @Input("title") title: string;
  @Input("back") back: boolean;

  user = { username: "not logged in" }

  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout()
    this.router.navigate(["/login"])
  }

  ngOnInit(): void {
    this.authService.userInfo().then((result) => {
      console.log("user: ", result)
      this.user = result.user
    })
  }

}
