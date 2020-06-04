import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrialDetailComponent } from './trial-detail.component';
import {CommentModule} from '../../../comment/comment.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TrialDetailComponent],
  imports: [
    RouterModule.forChild([{path: '', component: TrialDetailComponent}]),
    CommonModule,
    CommentModule
  ]
})
export class TrialDetailModule { }
