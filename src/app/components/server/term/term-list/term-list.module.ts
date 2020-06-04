import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermListComponent } from './term-list.component';
import {RouterModule} from '@angular/router';
import {AccountRegistrationComponent} from '../../../account-registration/account-registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TermListComponent],
  imports: [
    RouterModule.forChild([{path: '', component: TermListComponent}]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TermListModule { }
