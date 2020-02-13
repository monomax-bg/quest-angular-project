import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { flightsStoreReducer } from './flights-store/flights-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlightsStoreEffects } from './flights-store/flights-store.effects';
import { HourMinutePipe } from './pipes/hour-minute.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    FlightsComponent,
    FlightInfoComponent,
    HourMinutePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forFeature('flights-store', flightsStoreReducer),
    StoreModule.forRoot({}),
    // EffectsModule.forFeature([FlightsStoreEffects]),
    EffectsModule.forRoot([FlightsStoreEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
