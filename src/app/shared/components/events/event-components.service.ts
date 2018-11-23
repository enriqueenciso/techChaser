import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { EventProfile } from 'src/app/modules/profile/event-profile/event-profile.model';

@Injectable({
  providedIn: 'root'
})
export class EventComponentsService {
  private eventProfile: EventProfile[] = [];

  constructor(private http: HttpClient) {}
  addEvent(name: string, status: string, region: string, description: string) {
    // alert(`${name}, ${status}, ${region}, ${description}`);
    const eventData = new FormData();
    eventData.append('name', name);
    eventData.append('status', status);
    eventData.append('region', region);
    eventData.append('description', description);
    this.http
      .post<{message: string; event: EventProfile}>(
        'http://localhost:3000/api/events',
        eventData
      );
  }

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
