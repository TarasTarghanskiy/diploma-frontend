import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ServerMenuModule} from '../components/server/server-menu/server-menu.module';
import {QuillModule} from 'ngx-quill';
import {HttpClientModule} from '@angular/common/http';
import {StoryDropdownModule} from '../components/story-dropdown/story-dropdown.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', redirectTo: 'story', pathMatch: 'full'},
  {path: 'story', loadChildren: () => import('../components/story-list/story-list.module').then(m => m.StoryListModule)},
  {path: 'profile', loadChildren: () => import('../components/account-profile/account-profile.module').then(m => m.AccountProfileModule)},
  {path: 'login', loadChildren: () => import('../components/account-login/account-login.module').then(m => m.AccountLoginModule)},
  {path: 'acc_reg', loadChildren: () => import('../components/account-registration/account-registration.module')
      .then(m => m.AccountRegistrationModule)},
  {path: 'servers', loadChildren: () => import('../components/server-list/server-list.module').then(m => m.ServerListModule)},
  {path: 'server', loadChildren: () => import('../components/server/server-route.module').then(m => m.ServerRouteModule)},
  {path: 'create', loadChildren: () => import('../components/server-create/server-create.module').then(m => m.ServerCreateModule)},
  {path: '404', loadChildren: () => import('../components/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ServerMenuModule,
    QuillModule.forRoot(),
    StoryDropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
