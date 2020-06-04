import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountProfileComponent } from './account-profile.component';
import {RouterModule} from '@angular/router';
import {StoryListComponent} from '../story-list/story-list.component';



@NgModule({
  declarations: [AccountProfileComponent],
  imports: [
    RouterModule.forChild([{path: '', component: AccountProfileComponent}]),
    CommonModule
  ]
})
export class AccountProfileModule { }
