import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrialListComponent } from './trial-list.component';
import {RouterModule} from '@angular/router';
import {AccountRegistrationComponent} from '../../../account-registration/account-registration.component';



@NgModule({
  declarations: [TrialListComponent],
  imports: [
    RouterModule.forChild([{path: '', component: TrialListComponent}]),
    CommonModule
  ]
})
export class TrialListModule { }
