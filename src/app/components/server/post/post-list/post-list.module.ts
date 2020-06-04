import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import {RouterModule} from '@angular/router';
import {AccountRegistrationComponent} from '../../../account-registration/account-registration.component';



@NgModule({
  declarations: [PostListComponent],
  imports: [
    RouterModule.forChild([{path: '', component: PostListComponent}]),
    CommonModule
  ]
})
export class PostListModule { }
