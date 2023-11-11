import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './routes/index/index.component';
import { EventsComponent } from './routes/events/events.component';
import { EventComponent } from './routes/event/event.component';

const routes: Routes = [
  {
    path: "event/:id",
    component: EventComponent
  },
  {
    path: "event",
    component: EventsComponent
  },
  {
    path: "",
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
