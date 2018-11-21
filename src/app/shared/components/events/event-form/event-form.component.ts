import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
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
  // datePicker
  date = new FormControl();
  serializedDate = new FormControl((new Date()).toISOString());

  isLoading = false;

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

  constructor() { }

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

/*
  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
      if (this.mode === 'create') {
        this.postsService.addPost(
          this.form.value.title,
          this.form.value.content,
          this.form.value.image);
      } else {
        this.postsService.updatePost(
          this.postId,
          this.form.value.title,
          this.form.value.content,
          this.form.value.image
        );
      }
      this.form.reset();
    }
*/

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
