import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StoriesComponent } from './stories/stories.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharactersComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
