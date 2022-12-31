import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../posts';
import { PostsService } from '../posts.service';
@Component({
    selector:"app-post-create",
    templateUrl:"./post-create.component.html"
})
export class PostCreateComponent implements OnInit {
    newPost:string="no content";
    enteredValue: string= "emptyvalue";
    posts:Post[]=[];
    @Output() postCreated = new EventEmitter();
    @Input() postInput:string="";

    constructor(private postsService: PostsService){}

    ngOnInit(){
        this.posts = this.postsService.getPosts();
        this.postsService.getUpdatedPostsListener().subscribe((posts:Post[])=>{
            this.posts = posts;
          })
    }

    addNewPost(value:string){
        // this.newPost = (value=="no content"? "Trying to add new post!": "Add some contnet");
        // this.postInput = value;
        this.newPost = value;    

        this.postCreated.emit({title: value})  

        this.postsService.addPost({title: value})
    }



}