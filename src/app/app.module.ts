import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileModule } from './modules/profile/profile.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './shared/components/countdown-timer/countdown-timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { routingModule } from './app.routing';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { HomeComponent } from './shared/components/home/home.component';
import { EventFormComponent } from './shared/components/event-form/event-form.component';



@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    MainNavComponent,
    HomeComponent,
    EventFormComponent,
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AboutUsModule,
    routingModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
