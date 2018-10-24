import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileModule } from './modules/profile/profile.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './shared/components/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
