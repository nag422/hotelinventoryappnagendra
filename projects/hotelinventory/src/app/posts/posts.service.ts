import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts():Post[] {
    return [...this.posts];
  }
  getUpdatedPostsListener():any{
    return this.postsUpdated.asObservable();
  }
  addPost(vale: Post):void{
    this.posts.push(vale)
    this.postsUpdated.next([...this.posts]);
  }
}
