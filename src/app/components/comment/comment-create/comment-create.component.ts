import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentService} from '../../../services/comment/comment.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  text;
  @Output() commentIsSend = new EventEmitter<any>();
  @Input() comment = null;
  @Input() postID = 0;

  constructor(
    private commentService: CommentService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  send() {
    let commentID = 0;
    if (this.comment !== null) {
      commentID = this.comment.commentID;
    }
    const commentDTO = {
      text: this.text,
      ownerCommentID: commentID,
      postID: this.postID
    };
    this.commentService.send(commentDTO, this.serverID)
      .pipe(first())
      .subscribe(resp => {
        console.log(resp);
        this.commentIsSend.emit();
      });
    // this.router.navigate(['/server/' + this.serverID + '/post/' + this.postID]);
  }

  get serverID() {
    return Number.parseInt(this.router.url.split('/')[2], 10);
  }

  changeText(event: any) {
    this.text = event.target.value;
  }
}
