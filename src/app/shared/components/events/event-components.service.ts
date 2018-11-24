import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { EventProfile } from 'src/app/modules/profile/event-profile/event-profile.model';

@Injectable({
  providedIn: 'root'
})
export class EventComponentsService {
  private events: EventProfile[] = [];
  private eventUpdated = new Subject<EventProfile[]>();

  constructor(private http: HttpClient) {}
  addEvent(name: string, status: string, date: Date, region: string, description: string) {
    // alert(`${name}, ${status}, ${region}, ${description}`);
    /*
    const eventData = new FormData();
    eventData.append('_id', id);
    eventData.append('name', name);
    eventData.append('status', status);
    eventData.append('region', region);
    eventData.append('description', description);
    */
    alert(date);
      const event: EventProfile = { id: null, name: name, status: status, date: date,  region: region, description: description };
      this.http
      .post<{ message: string, postId: string }>('http://localhost:3000/api/events', event)
      .subscribe(responseData => {
        const id = responseData.postId;
        event.id = id;
        this.events.push(event);
        this.eventUpdated.next([...this.events]);
      });
  }

  /*
    / post("/api/contacts")
    addEvent(name: string, status: string, region: string, description: string): Promise<void | EventProfile> {
      return this.http.post(this.contactsUrl, newContact)
                 .toPromise()
                 .then(response => response.json() as Contact)
                 .catch(this.handleError);
  */

  /*
      // post("/api/contacts")
    createContact(newContact: Contact): Promise<void | Contact> {
      return this.http.post(this.contactsUrl, newContact)
                 .toPromise()
                 .then(response => response.json() as Contact)
                 .catch(this.handleError);
    }
  */

  /*
    addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);
    this.http
      .post<{ message: string; post: Post }>(
        'http://localhost:3000/api/posts',
        postData
      )
      .subscribe(responseData => {
        const post: Post = {
          id: responseData.post.id,
          title: title,
          content: content,
          imagePath: responseData.post.imagePath
        };
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(['/']);
      });
  }
  */
}
