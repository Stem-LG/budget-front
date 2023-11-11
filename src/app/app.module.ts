import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './routes/index/index.component';
import { EventsComponent } from './routes/events/events.component';
import { EventComponent } from './routes/event/event.component';
import { FormsModule } from '@angular/forms';
import { EventCardComponent } from './routes/events/components/event-card/event-card.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlService } from './services/graphql.service';
import { EventSummaryComponent } from './routes/event/components/event-summary/event-summary.component';
import { EventFundsComponent } from './routes/event/components/event-funds/event-funds.component';
import { EventExpensesComponent } from './routes/event/components/event-expenses/event-expenses.component';
import { EventEarningsComponent } from './routes/event/components/event-earnings/event-earnings.component';

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
    EventEarningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [GraphqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
