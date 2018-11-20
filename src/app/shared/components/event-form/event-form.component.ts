import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import { StatusEvent } from '../event-form/event-form.model';

export interface StatusEvent {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})

export class EventFormComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  statusEvents: StatusEvent[] = [
    {value: 'upcoming', viewValue: 'Upcoming'},
    {value: 'in-progress', viewValue: 'In progress'},
    {value: 'finished', viewValue: 'Finished'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
