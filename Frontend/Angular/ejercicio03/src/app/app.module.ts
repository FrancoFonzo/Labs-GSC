import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventLocationComponent } from './event-location/event-location.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventLocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
