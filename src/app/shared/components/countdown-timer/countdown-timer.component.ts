import { Component, OnChanges, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  remainingDays: number;
  remainingHours: number;
  remainingMinutes: number;
  remainingSeconds: number;

  @Input()
  goalDate?: Date = new Date('December 7, 2018 00:00:00');

  private countSubscription$ = new Subscription();

  constructor() {}

  ngOnInit() {
    this.goalDate = new Date(this.goalDate);
    this.countSubscription$.add(interval(1000).pipe(
      map(() => {
        this.getRemainingTime(new Date());
      })
    ).subscribe());
  }

  ngOnDestroy() {
    this.countSubscription$.unsubscribe();
  }

  private getRemainingTime(startDate: Date) {
    const diffTime: Date = new Date(this.goalDate.getTime() - startDate.getTime());

    this.remainingDays = diffTime.valueOf() / (1000 * 60 * 60 * 24);
    this.remainingHours = diffTime.getUTCHours();
    this.remainingMinutes = diffTime.getUTCMinutes();
    this.remainingSeconds = diffTime.getUTCSeconds();
  }

}
