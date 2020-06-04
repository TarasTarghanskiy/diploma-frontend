import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawListComponent } from './law-list.component';
import {RouterModule} from '@angular/router';
import {AccountRegistrationComponent} from '../../../account-registration/account-registration.component';



@NgModule({
  declarations: [LawListComponent],
  imports: [
    RouterModule.forChild([{path: '', component: LawListComponent}]),
    CommonModule
  ]
})
export class LawListModule { }
