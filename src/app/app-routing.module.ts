import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './routes/index/index.component';
import { EventsComponent } from './routes/events/events.component';
import { EventComponent } from './routes/event/event.component';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "event/:id",
    component: EventComponent
  },
  {
    path: "event",
    component: EventsComponent,
  },
  {
    path: "dashboard",
    component: IndexComponent,
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
