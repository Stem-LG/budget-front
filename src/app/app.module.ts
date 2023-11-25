import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './routes/index/index.component';
import { EventsComponent } from './routes/events/events.component';
import { EventComponent } from './routes/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventCardComponent } from './routes/events/components/event-card/event-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EventSummaryComponent } from './routes/event/components/event-summary/event-summary.component';
import { EventFundsComponent } from './routes/event/components/event-funds/event-funds.component';
import { EventExpensesComponent } from './routes/event/components/event-expenses/event-expenses.component';
import { EventEarningsComponent } from './routes/event/components/event-earnings/event-earnings.component';
import { LoginComponent } from './routes/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { SummaryComponent } from './routes/index/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EventsComponent,
    EventComponent,
    EventCardComponent,
    EventSummaryComponent,
    EventFundsComponent,
    EventExpensesComponent,
    EventEarningsComponent,
    LoginComponent,
    SidebarComponent,
    AppbarComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
