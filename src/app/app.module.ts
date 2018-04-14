import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoriesComponent } from './stories/stories.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { AppRouterModule } from './app-router.module';
import { CharactersService } from './characters-service.service';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StoriesComponent,
    AboutComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [CharactersService, Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
