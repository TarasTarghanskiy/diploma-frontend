import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailComponent} from './post-detail.component';
import {RouterModule} from '@angular/router';
import {CommentModule} from '../../../comment/comment.module';
import {OpinionModule} from '../../../opinion/opinion.module';
import {ReportFormModule} from '../../../report-form/report-form.module';



@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    RouterModule.forChild([{path: '', component: PostDetailComponent}]),
    CommonModule,
    CommentModule,
    OpinionModule,
    ReportFormModule
  ]
})
export class PostDetailModule { }
