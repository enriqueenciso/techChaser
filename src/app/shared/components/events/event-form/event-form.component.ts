import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { StatusEvent } from '../event-status.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventComponentsService } from '../event-components.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})

export class EventFormComponent implements OnInit {
  // datePicker
  date = new FormControl();
  serializedDate = new FormControl((new Date()).toISOString());

  // Spinner loading
  isLoading = false;

  // Operation
  private mode = 'create';
  private postId: string;

  // form
  eventForm: FormGroup;

  // Status list
  statusEvents: StatusEvent[] = [
    {value: 'upcoming', viewValue: 'Upcoming'},
    {value: 'in-progress', viewValue: 'In progress'},
    {value: 'finished', viewValue: 'Finished'}
  ];

  constructor(
    public eventComponentsService: EventComponentsService) {
      // this.eventForm = eventComponentsService.addEvent();
     }

  ngOnInit() {
    // Validation
    this.eventForm = new FormGroup({
      'eventName': new FormControl(null,
        {validators: [Validators.required, Validators.minLength(4)]
      }),
      'eventStatus': new FormControl(null,
        {validators: [Validators.required]
      }),
      'eventDate': new FormControl(null,
        {validators: [Validators.required]
      }),
      'eventRegion': new FormControl(null,
        {validators: [Validators.required]
      }),
      'eventDescription': new FormControl(null,
        {validators: [Validators.required]
      }),
      // image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    });
  }


  onSaveEvent() {
    alert(`Se esta enviando: ${this.eventForm.value.eventName}, ${this.eventForm.value.eventStatus}, ${this.eventForm.value.eventDate},
    ${this.eventForm.value.eventRegion}, ${this.eventForm.value.eventDescription}`);
    if (this.eventForm.invalid) {
      return;
    }
      this.eventComponentsService.addEvent(
        this.eventForm.value.eventName,
        this.eventForm.value.eventStatus,
        this.eventForm.value.eventDate.toISOString(),
        this.eventForm.value.eventRegion,
        this.eventForm.value.eventDescription);
    this.eventForm.reset();
    alert('Event added!!!');
  }


// Add or edit Event

/*
onSavePost() {
  if (this.eventForm.invalid) {
    return;
  }
  this.isLoading = true;
  this.postsService.addPost(
    this.eventForm.value.title,
    this.eventForm.value.content,
    this.eventForm.value.image);
}
*/
}
