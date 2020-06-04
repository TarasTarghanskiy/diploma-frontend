import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';



@NgModule({
  declarations: [PostCreateComponent],
  imports: [
    RouterModule.forChild([{path: '', component: PostCreateComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class PostCreateModule { }
