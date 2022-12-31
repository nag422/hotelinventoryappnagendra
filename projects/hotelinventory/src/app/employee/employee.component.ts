import { Component, Input, OnDestroy, OnInit, Self } from '@angular/core';
import { Post } from '../posts/posts';
import { PostsService } from '../posts/posts.service';
import { RoomsService } from '../rooms/services/rooms.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
  // the above line or provider removes then, app throws error that service is not available.
})
export class EmployeeComponent implements OnInit, OnDestroy {
  empName: string = "Kumar";
  posts:Post[] = [];
  private postUnsubscriber!:Subscription;
  @Input() employeePosts:any = [];
  // the self decorator check whether the providers is provided in this file or not
  constructor(@Self() private roomsService: RoomsService, private postsService: PostsService) { }
  // @SkipSelf rarely uses to see instance available and pretty fast

  ngOnInit() {
    this.postUnsubscriber = this.postsService.getUpdatedPostsListener().subscribe((posts:Post[])=>{
      return this.posts = posts;
    });
  }
  checkViewContentfn(): void {
    console.log("checkViewContentfn")
  }

  onPostAdded(post:any):void {
    alert("post added")
    // this.employeePosts.push(post)
    this.postsService.addPost(post)
  }

  ngOnDestroy() {
    if(this.postUnsubscriber){
      this.postUnsubscriber.unsubscribe();
    }
    
  }

}
