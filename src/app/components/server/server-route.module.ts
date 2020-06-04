import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PostDetailComponent } from './post/post-detail/post-detail.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: ':id', children: [
          {path: '', redirectTo: 'detail', pathMatch: 'full'},
          {path: 'detail', loadChildren: () => import('./server-detail/server-detail.module').then(m => m.ServerDetailModule)},
          {path: 'laws', loadChildren: () => import('./law/law-list/law-list.module').then(m => m.LawListModule)},
          {path: 'law_create', loadChildren: () => import('./law/law-create/law-create.module').then(m => m.LawCreateModule)},
          {path: 'posts', loadChildren: () => import('./post/post-list/post-list.module').then(m => m.PostListModule)},
          {path: 'post/:id', loadChildren: () => import('./post/post-detail/post-detail.module').then(m => m.PostDetailModule)},
          {path: 'post_create', loadChildren: () => import('./post/post-create/post-create.module').then(m => m.PostCreateModule)},
          {path: 'terms', loadChildren: () => import('./term/term-list/term-list.module').then(m => m.TermListModule)},
          {path: 'term_create', loadChildren: () => import('./term/term-create/term-create.module').then(m => m.TermCreateModule)},
          {path: 'trials', loadChildren: () => import('./trial/trial-list/trial-list.module').then(m => m.TrialListModule)},
          {path: 'trial/:id', loadChildren: () => import('./trial/trial-detail/trial-detail.module').then(m => m.TrialDetailModule)},
          {path: 'votes', loadChildren: () => import('./vote-list/vote-list.module').then(m => m.VoteListModule)},
          {path: '**', loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)},
          {path: '**', redirectTo: '/404'}
        ]
      },
    ]),
    CommonModule
  ]
})
export class ServerRouteModule { }
