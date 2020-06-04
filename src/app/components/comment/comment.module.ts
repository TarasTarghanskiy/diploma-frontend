import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OpinionModule} from '../opinion/opinion.module';
import {ReportFormModule} from '../report-form/report-form.module';



@NgModule({
  declarations: [CommentCreateComponent, CommentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OpinionModule,
    ReportFormModule
  ],
  exports: [CommentCreateComponent, CommentListComponent]
})
export class CommentModule { }
