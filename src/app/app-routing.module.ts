import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './routes/index/index.component';
import { EventsComponent } from './routes/events/events.component';
import { EventComponent } from './routes/event/event.component';
import { LoginComponent } from './routes/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [authGuard]
  },
  {
    path: "event/:id",
    component: EventComponent,
    canActivate: [authGuard]
  },
  {
    path: "event",
    component: EventsComponent,
    canActivate: [authGuard]
  },
  {
    path: "dashboard",
    component: IndexComponent,
    canActivate: [authGuard]
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
