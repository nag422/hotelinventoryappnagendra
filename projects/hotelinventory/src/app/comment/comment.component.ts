import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { Comments } from './comment';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comment'))
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) { }
  

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(data => console.log(data?.['comment']));
  }

}
