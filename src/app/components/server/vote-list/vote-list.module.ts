import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteListComponent } from './vote-list.component';
import {RouterModule} from '@angular/router';
import {AccountRegistrationComponent} from '../../account-registration/account-registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [VoteListComponent],
  imports: [
    RouterModule.forChild([{path: '', component: VoteListComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VoteListModule { }
